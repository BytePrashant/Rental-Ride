interface TeamProps {
    imgSrc: string,
    name: string,
    designation: string
}


export const Teams: React.FC<TeamProps> = (props) => {
  return (
    <>
      <div className="content">
        <div className="Models border border-solid border-slate-200">
          <div className="model-content flex flex-col items-center p-4">
            <img  className="w-52 h-60 " src={props.imgSrc} alt="person-img" />
                <p className="font-bold text-center my-5">{props.name}</p>
                <p>{props.designation}</p>
          </div>
        </div>
      </div>
    </>
  );
};
