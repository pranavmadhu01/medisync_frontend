import { useRouter } from "next/router";
const hospitalData = () => {
  const router = useRouter();
  console.log(router.query);
  const { doctorid } = router.query;
  return <div>Post: {doctorid}</div>;
};
export default hospitalData;
