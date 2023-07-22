import { useQuery } from "@tanstack/react-query";

const useCollage = () => {
    const {data = [] , isLoading , error , refetch} = useQuery({
        queryKey:["collage"],
        queryFn: async() =>{
            try{
                const response = await fetch(`collages.json`)
                const data  = response.json();
                return data
            }
            catch(err){
                console.log(err);
            }
        }
    })

    return [data, isLoading , error , refetch]

}

export default useCollage;
