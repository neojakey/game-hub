import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => 
    useQuery<FetchResponse<Platform>>({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24 hrs'),
        initialData: platforms
    });

export default usePlatforms;
