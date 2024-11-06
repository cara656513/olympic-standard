const MedalList = (allInfo, deleteHandler) => {
  return (
    <>
      {" "}
      {allInfo.map((info) => {
        return (
          <div key={info.id}>
            {info.nation}: 금메달 {info.gold}개, 은메달 {info.silver}개, 동메달{" "}
            {info.bronze}개{" "}
            <button id={info.id} onClick={deleteHandler}>
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MedalList;
