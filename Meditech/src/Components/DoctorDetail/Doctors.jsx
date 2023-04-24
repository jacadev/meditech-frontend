// import { SimpleGrid } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
// import DoctorCard from './DoctorCard';
// import { useDispatch } from 'react-redux';

// const Doctors = () => {
//     const dispatch = useDispatch();
//   const doctors = useSelector(state => state.doctors);

//   useEffect(() => {
//     dispatch(fetchDoctors());
//     console.log(doctors)
//   }, [dispatch]);
//   return (
//     <SimpleGrid columns={{ base: 1, md: 2 }} spacing="40px">
//       {doctors.map((doctor) => (
//         <DoctorCard key={doctor.id} doctor={doctor} />
//       ))}
//     </SimpleGrid>
//   );
// };

// export default Doctors;