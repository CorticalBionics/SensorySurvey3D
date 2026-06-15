function Survey3DDataRecord = launch_annotation_viewers(subject,Survey3DData,axis_alignment)

    %% import 3D mesh and annotation colormaps
    Survey3DDataRecord = Survey3DData;
    idx_record = 1:length(Survey3DDataRecord);
    this_subject = find(strcmp({Survey3DData.Subject},subject)); % which rows correspond to this subject
    which_models = {Survey3DData.ModelName};
    which_models = unique(which_models(this_subject));
    
    for m = 1:length(which_models)
        mesh_source = [which_models{m} '.json'];
        landmarks_source = [which_models{m} '_procrustes_keypoints.json'];
        Survey3DData = Survey3DDataRecord(this_subject); % exclude other subjects from dataset
        this_model = find(strcmp({Survey3DData.ModelName},which_models{m})); % which rows correspond to this model
        Survey3DData = Survey3DData(this_model); % exclude other subjects from dataset
        documented_electrodes = {Survey3DData.ElectrodeID};
        unique_documented_electrodes = unique(documented_electrodes);
    
        these_idxs = idx_record(this_subject);
        these_idxs = these_idxs(this_model);
        
        % summarize annotation colormaps
        all_fields = fieldnames(Survey3DData);
        qualities = all_fields(find(strcmp(all_fields,'ModelName'))+1:end);
        annotation_record = struct();
        color_map = struct();

        for row = 1:size(Survey3DData,2)
            this_row = these_idxs(row);
            color_map(this_row).map = [];
        end
        
        for q = 1:length(qualities)
            for row = 1:size(Survey3DData,2)
                this_row = these_idxs(row);
                annotation_record(this_row).(qualities{q}) = [];

                if ~isempty(Survey3DData(row).(qualities{q}))
                    annotation_record(this_row).(qualities{q}) = cat(2, annotation_record(this_row).(qualities{q}), Survey3DData(row).(qualities{q}).fields);
                end
        
                color_map(this_row).map = cat(2, color_map(this_row).map, annotation_record(this_row).(qualities{q}));
            end
        end
        
        for row = 1:size(Survey3DData,2)
            this_row = these_idxs(row);
            which_map = nansum(color_map(this_row).map,2);
            which_map(which_map>0) = 1; % binary selected or not, regardless of sensation type 
            if max(which_map,[],"all")>0
                which_map = which_map./max(which_map,[],"all");
            end

            Survey3DDataRecord(this_row).ColorMap = which_map;
        end
        
        %% annotation viewer
        disp(['Launching annotation viewer for model ' mesh_source '.'])
        data = import_json(mesh_source,false);
        three_dim.raw_verts = data.vertices;
        three_dim.faces = data.faces;
        
        try
            three_dim.landmark_report = import_json(landmarks_source,true);
        catch
            if contains(landmarks_source,'_gltf')
                foo = split(landmarks_source,'_gltf');
                landmarks_source = ['Survey3DLandmarks_' foo{1} '.gltf' foo{2}];
            elseif contains(landmarks_source,'_glb')
                foo = split(landmarks_source,'_glb');
                landmarks_source = ['Survey3DLandmarks_' foo{1} '.glb' foo{2}];
            end
    
            if ~contains(landmarks_source,'Survey3DLandmarks')
                landmarks_source = ['Survey3DLandmarks_' landmarks_source];
            end
            three_dim.landmark_report = import_json(landmarks_source,true);
        end

        % align short and long axes of model to some space
        if strcmp(axis_alignment,"hand_landmarks")
            axis_alignment_mod = [three_dim.landmark_report.EoW'; three_dim.landmark_report.Mend'; three_dim.landmark_report.Pend'; three_dim.landmark_report.Tend'];
        else
            axis_alignment_mod = axis_alignment;
        end

        [~,~,transform] = procrustes([0 0 0; 0 1 0; 0 0 -1; 0 0 1],axis_alignment_mod,'reflection',false); % Z = TRANSFORM.b * Y * TRANSFORM.T + TRANSFORM.c
        three_dim.raw_verts = transform.b*three_dim.raw_verts*transform.T+transform.c(1,:);

        annotation_viewer(Survey3DData,unique_documented_electrodes,qualities,three_dim,subject,mesh_source)
       
        %% annotation viewer by row
        disp(['Launching rowwise annotation viewer for model ' mesh_source '.'])
        row_annotation_viewer(Survey3DData,qualities,three_dim,subject,mesh_source)
    end
end