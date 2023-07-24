import { useQuery } from "@tanstack/react-query";

const useReview = (id) => {
    const {data = [] , isLoading , error , refetch} = useQuery({
        queryKey:["collage",id],
        queryFn: async() =>{
            try{
                const response = await fetch(`http://localhost:5000/reviews`)
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

export default useReview;
