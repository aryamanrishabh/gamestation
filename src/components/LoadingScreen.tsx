import { FC, useEffect, useRef } from "react";
import Lottie from "lottie-web";
import styled from "styled-components";
import FlexBox from "./common/FlexBox";
import Image from "next/image";
import Heading from "./common/Heading";
import Text from "./common/Text";
import { useAppSelector } from "@hooks/reduxHooks";

const Wrapper = styled(FlexBox)`
  height: 100vh;
  width: 100vw;
`;

const LottieContainer = styled.div`
  width: 100%;
  height: 22.5rem;
  @media screen and (max-width: 768px) {
  }
`;

const Container = styled(FlexBox)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const PlayersText = styled(Text)`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem 3rem;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;

let loadingAnimation: any;

const LoadingScreen: FC = () => {
  const animationDivRef = useRef<HTMLDivElement>(null);
  const players = useAppSelector((state) => state?.game?.data?.players);

  useEffect(() => {
    if (animationDivRef.current) loadAnimation();

    return () => loadingAnimation.destroy();
  }, [animationDivRef]);

  const loadAnimation = () => {
    try {
      if (loadingAnimation) loadingAnimation.destroy();

      loadingAnimation = Lottie.loadAnimation({
        path: "https://assets3.lottiefiles.com/private_files/lf30_klsv8ygt.json",
        container: animationDivRef.current as Element,
        loop: true,
      });
    } catch (err) {
      console.log(err, "error in loading animation");
    }
  };

  return (
    <Wrapper>
      <Image
        src="/images/pixel-art-bg.webp"
        layout="fill"
        alt="HomePage background"
        priority
      />
      <Container column>
        <LottieContainer ref={animationDivRef} />
        <FlexBox align="center" column rowGap="2rem">
          <Heading>Players Joining</Heading>
          <PlayersText>{players?.length} / 4</PlayersText>
          {players?.length === 1 ? (
            <Text>{players?.[0]?.name}</Text>
          ) : (
            <Grid>
              {players?.map((player) => (
                <Text bold key={player.id}>
                  {player.name}
                </Text>
              ))}
            </Grid>
          )}
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default LoadingScreen;
