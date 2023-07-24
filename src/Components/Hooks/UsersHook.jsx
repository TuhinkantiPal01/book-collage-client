import { useQuery } from "@tanstack/react-query";

const useUsers = (id) => {
    const {data = [] , isLoading , error , refetch} = useQuery({
        queryKey:["collage",id],
        queryFn: async() =>{
            try{
                const response = await fetch(`https://book-collage-server-tuhinofficial.vercel.app/collages`)
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

export default useUsers;
