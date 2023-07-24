import { useContext } from "react";
import Banner from "../../../Components/Banner/Banner";
import useAdmission from "../../../Components/Hooks/userAdmission";
import { AuthContext } from "../../../Components/provider/AuthProvider";
import { IconButton } from "@mui/material";
import { BiSolidTrashAlt } from "react-icons/bi";
import Loading from "../../../Components/Loading/Loading";

const MyCollage = () => {
  const { user } = useContext(AuthContext);

  const [data, isLoading] = useAdmission(user?.email);
  console.log(data);

  return (
    <section>
      <Banner title='My Collage' subtitle='Your Selected Collages' height='96' />

      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className='my-20'>
            {data.length > 0 ? (
              <>
                <div>
                  <div className='container mx-auto px-4 py-8'>
                    <h1 className='text-3xl text-center font-semibold mb-4'>Your Selected Collages</h1>
                    <div className='shadow-lg rounded-lg overflow-scroll md:overflow-hidden'>
                      <table className='w-full'>
                        <thead className='bg-gray-200'>
                          <tr>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Name</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Email</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Collage</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Subject</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Date</th>
                            <th className='px-6 py-4 text-left text-sm font-bold uppercase'>Action</th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                          {data.map(({ name, email, collage, subject, date }, index) => (
                            <tr key={index}>
                              <td className='px-6 py-4 whitespace-nowrap'>{name}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{email}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{collage}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{subject}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>{date}</td>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                <IconButton aria-label='delete'>
                                  <BiSolidTrashAlt />
                                </IconButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='max-w-5xl mx-auto min-h-[300px] flex justify-center items-center'>
                  <h3>You Have No Selected Collage</h3>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default MyCollage;
