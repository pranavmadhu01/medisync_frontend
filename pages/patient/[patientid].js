import { useRouter } from "next/router";
const patientData = () => {
  const router = useRouter();
  console.log(router.query);
  const { doctorid } = router.query;
  return <div>Post: {doctorid}</div>;
};
export default patientData;
