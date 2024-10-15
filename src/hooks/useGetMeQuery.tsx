import {useQuery} from "@tanstack/react-query";
import authApis from "@/apis/authApis.ts";

const UseGetMeQuery = () => {
	return useQuery({
		queryKey: ['me'],
		queryFn: authApis.getMe
	});

};

export default UseGetMeQuery;