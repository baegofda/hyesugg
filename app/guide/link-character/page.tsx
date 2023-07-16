import React from "react";

const GUIDE_3_DEFAULT =
  "3-1. 군영에서 해골 댕댕이 잡으면서 60까지 넷플 보면서 올려도 됨";

const GUIDE_5_DEFAULT =
  "5-1. 83찍고 경매장에서 자쿰 무기 착용레벨 감소 30이나 25붙은거 사면됨 너무 비싸면 20정도? 그 전까지는 주워서 아무거나";

const TRAINING_DETAIL = [
  "4-1. 가격이 1000만원 넘어가기 시작하면 사냥하다가 아무 레어나 먹어서 수큐로 3% 정도만 띄워줘도 됨",
  "4-2 캐릭터 성별은 무조건 통일하셈 나중에 피본다 ",
  "4-3 사놓은 템들 토드는 80렙제 아이템 까지만 해도 ㄱㅊ ",
];

const CACHE_SHARE = [
  "1) 모험가, 캐논슈터, 패스파인더, 듀얼블레이더",
  "2) 시그너스 기사단",
  "3) 레지스탕스",
  "4) 아란, 에반, 루미, 메르, 은월, 팬텀",
  "5) 카이저, 카데나, 엔버",
  "6) 아델, 일리움, 아크",
];

const GUIDES = {
  default: {
    title: "--------------기본적으로 알아야 함-------------",
    items: [
      "먼저 필수링크 위주로 육성 계획을 잡는다",
      "그 직업 주스텟을 알아둔다",
      "그 직업과 캐시샵 공유가 되는 애들은 알아둔다",
    ],
  },
  TrainingPreparation: {
    title: "-----------------육성 준비--------------------",
    items: [
      "캐릭을 만든다.",
      "펫을 사준다 1개만 사도됨",
      "펫은 물약 자동으로 먹는거 필수",
      "모자, 상의, 하의, 신발, 장갑 이 5개 부위는 주스탯 9%나 6% 정도 사놓는다.( 이 때 토드하면서 올라가면 돈 절약 쌉가능 100% 주문서로 다 해도댐)",
      "유니온 그 직업 주스탯으로 바꿔줌",
    ],
  },
  Training: {
    title: "------------육성 시작----------------------------",
    items: [
      "30까진 걍 아무렇게나 키우면 됨",
      "30찍고 골드비치 하면 42~43",
      "다른 테마던전 하면서 60까지",
      "60~70 까지는 엘나스에 얼음골짜기 2 가서 화이트팽(미끄러져도 견뎌! 동물의 가죽 모아서 나중에 팔면 쏠쏠함)",
      "70~83 까지 사헬지대2 or 잠자는 사막",
      "83~90까지 리프레 동쪽숲",
      "90~100 하늘둥지 3 (여기가 버닝도 있고 좋음 잘 안죽는데 걍 참고 때리면 금방 올라감 넷플이 이럴 때 필요 ^^)",
      "100~125 듀얼파이렛 잡으면 ㄹㅇ 넘사임",
      "125 아랫마을 현상금 퀘스트 하면서 돈 조금 모아주고 레벨 올려주고 ",
      "그 이후로 140까지 시련의 동굴1 에서 주니어 불독 잡으면 됨",
    ],
  },
};

const LinkCharacter = () => {
  return (
    <>
      <img
        src="/KakaoTalk_20230716_200855861.png"
        alt=""
        width={743}
        height={569}
      />
      <section>
        <h2>링크 캐릭터 육성 가이드</h2>
        <section>
          <h3>{GUIDES["default"].title}</h3>
          <ol className={"list-decimal"}>
            {GUIDES["default"].items.map((item, idx) => {
              if (item === "그 직업과 캐시샵 공유가 되는 애들은 알아둔다") {
                return (
                  <li key={item}>
                    {item}
                    <ul>
                      {CACHE_SHARE.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return <li key={idx}>{item}</li>;
            })}
          </ol>
        </section>
        <section>
          <h3>{GUIDES["TrainingPreparation"].title}</h3>
          <ol className={"list-decimal"}>
            {GUIDES["TrainingPreparation"].items.map((item, idx) => {
              if (
                item ===
                "모자, 상의, 하의, 신발, 장갑 이 5개 부위는 주스탯 9%나 6% 정도 사놓는다.( 이 때 토드하면서 올라가면 돈 절약 쌉가능 100% 주문서로 다 해도댐)"
              ) {
                return (
                  <li key={item}>
                    {item}
                    <ul>
                      {TRAINING_DETAIL.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return <li key={idx}>{item}</li>;
            })}
          </ol>
        </section>
        <section>
          <h3>{GUIDES["Training"].title}</h3>
          <ol className={"list-decimal"}>
            {GUIDES["Training"].items.map((item, idx) => {
              if (item === "다른 테마던전 하면서 60까지") {
                return (
                  <li key={item}>
                    {item}
                    <ul>
                      <li>{GUIDE_3_DEFAULT}</li>
                    </ul>
                  </li>
                );
              }

              if (item === "70~83 까지 사헬지대2 or 잠자는 사막") {
                return (
                  <li key={item}>
                    {item}
                    <ul>
                      <li>{GUIDE_5_DEFAULT}</li>
                    </ul>
                  </li>
                );
              }

              return <li key={idx}>{item}</li>;
            })}
          </ol>
        </section>
      </section>
    </>
  );
};

export default LinkCharacter;
