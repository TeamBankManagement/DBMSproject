import { SignUp} from "@clerk/nextjs";

export default function Page() {
  const bgImageStyle = {
    backgroundImage: 'url("https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/IIT_Guwahati_banner_3beef0acc3.webp")',
  };
  return (
    <>
     <div
        className="main-content w-full px-[var(--margin-x)] pb-8 overflow-hidden"
        style={bgImageStyle}
      >
        <div className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
  <SignUp/>

  </div>
  </div>
  </div>
  </>
  );
}