import React from "react";
import styled from "styled-components";
import { LabiRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  labiPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const LabiPrice: React.FC<Props> = ({ labiPriceUsd }) => {
  return labiPriceUsd ? (
    <PriceLink
      href="https://bscscan.com/token/0x832ee11811a5b66d33478223a618fd897425b9b4"
      target="_blank"
    >
      <LabiRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${labiPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(LabiPrice);
