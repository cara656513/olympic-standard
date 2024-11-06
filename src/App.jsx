import { useState } from "react";
import MedalList from "./components/MedalList";

const App = () => {
  const [allInfo, setAllInfo] = useState([]);

  const [nation, setNation] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  const nationHandler = (e) => {
    setNation(e.target.value);
  };
  const goldHandler = (e) => {
    setGold(e.target.value);
  };
  const silverHandler = (e) => {
    setSilver(e.target.value);
  };
  const bronzeHandler = (e) => {
    setBronze(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newInfo = {
      id: new Date().getTime(),
      nation,
      gold,
      silver,
      bronze,
    };

    if (allInfo.map((info) => info.nation).includes(newInfo.nation)) {
      alert("이미 등록된 국가입니다.");
    } else {
      setAllInfo([...allInfo, newInfo]);
    }
    setNation("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const deleteHandler = (e) => {
    const deletedInfo = allInfo.filter((info) => info.id !== +e.target.id);
    setAllInfo([...deletedInfo]);
  };

  const modifyHandler = () => {
    if (!allInfo.map((info) => info.nation).includes(nation)) {
      alert("먼저 국가 추가를 해주세요");
    } else {
      const deletedInfo = allInfo.filter((info) => info.nation !== nation);
      const newInfo = {
        id: new Date().getTime(),
        nation,
        gold,
        silver,
        bronze,
      };

      setAllInfo([...deletedInfo, newInfo]);
    }
  };

  return (
    <>
      <div>2024 올림픽 메달 트래커</div>
      <div
        style={{
          display: "flex",
          gap: "130px",
        }}
      >
        <div>국가명</div>
        <div>금메달</div>
        <div>은메달</div>
        <div>동메달</div>
      </div>
      <form onSubmit={submitHandler}>
        <input value={nation} onChange={nationHandler} />
        <input value={gold} onChange={goldHandler} />
        <input value={silver} onChange={silverHandler} />
        <input value={bronze} onChange={bronzeHandler} />
        <button type="submit">추가</button>
        <button type="button" onClick={modifyHandler}>
          수정
        </button>
      </form>

      <div>
        {allInfo.map((info) => {
          return (
            <div key={info.id}>
              {info.nation}: 금메달 {info.gold}개, 은메달 {info.silver}개,
              동메달 {info.bronze}개{" "}
              <button id={info.id} onClick={deleteHandler}>
                삭제
              </button>
            </div>
          );
        })}
        {/* <MedalList allInfo={allInfo} deleteHandler={deleteHandler}></MedalList> */}
      </div>
    </>
  );
};

export default App;
