import React from "react";

import * as S from "./styled";

const CardFloat = ({
  title,
  value,
  description,
}: {
  title: any;
  value: any;
  description: any;
}) => {
  return (
    <S.CardFloat>
      <S.Title className={`${title === "Mundial" ? "mundial" : "brazil"}`}>
        {title}
      </S.Title>
      <S.Value>{value}</S.Value>
      <S.Description>{description}</S.Description>
    </S.CardFloat>
  );
};

export default CardFloat;
