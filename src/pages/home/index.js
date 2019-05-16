import React from "react";

import {
  StyledHome,
  StyledHomeHero,
  StyledHomeHeroIntro,
  StyledHomeHeroIntroTitle,
  StyledHomeHeroIcon,
  StyledHomeCards,
  StyledHomeCardsInner
} from "./styled";

import Hero from "../../components/hero";
import PlayCtaButton from "../../components/play-cta-button";
import Trending from "../../components/trending";
import DonationStrip from "../../components/donation-strip";
import CardGrid from "../../components/card-grid";
import StoryCard from "../../components/story-card";

const Home = () => (
  <StyledHome>
    <Hero type="home" bgImage="/images/hero_mixer.jpg" bgColor="#1e2827">
      <StyledHomeHero>
        <StyledHomeHeroIntro>
          <StyledHomeHeroIntroTitle>
            <StyledHomeHeroIcon src="/images/show_new-sounds.jpg" />
            <h1>New Sounds</h1>
          </StyledHomeHeroIntroTitle>
          <p>Hand-picked music, genre free. 24/7 radio from New York City.</p>
          <PlayCtaButton
            audioSrc="/audio/track-one.mp3"
            name="New Sounds"
            trackId="track-one"
            trackName="New Sounds"
            trackImage="/images/show_new-sounds.jpg"
            isLive
          />
        </StyledHomeHeroIntro>
        <Trending />
      </StyledHomeHero>
    </Hero>
    <DonationStrip />
    <StyledHomeCards>
      <StyledHomeCardsInner>
        <h2>Latest News</h2>
        <CardGrid>
          <StoryCard
            imageSrc="/images/news_trump.jpg"
            title="Plan Doesn’t Address Undocumented Immigrants"
            excerpt="President Trump will announce the new immigration proposal on Thursday. It would keep legal immigration levels the same but dramatically change who would be let in."
            date="May 16, 2019"
          />
          <StoryCard
            imageSrc="/images/news_wildfire.jpg"
            title="PG&E Transmissions Lines Caused California Wildfire"
            excerpt="After a very meticulous and thorough investigation, CAL FIRE has determined that the Camp Fire was caused by electrical transmission lines owned and operated by Pacific Gas and Electricity (PG&E)."
            date="May 15, 2019"
          />
          <StoryCard
            imageSrc="/images/news_measles.jpg"
            title="What You Should Know About Vaccines For Adults."
            excerpt="We're used to kids needing lots of shots to ward off lots of illnesses, but what about adults? The CDC recommends that adults get multiple vaccinations for conditions ranging from tetanus to influenza to cervical cancer."
            date="May 15, 2019"
          />
          <StoryCard
            imageSrc="/images/news_asylum-ny.jpg"
            title="Why It's Harder to Win Asylum, Even in New York"
            excerpt="In immigrant-friendly New York, migrants have historically had a much easier time winning asylum than one would have expected"
            date="May 14, 2019"
          />
        </CardGrid>
      </StyledHomeCardsInner>
    </StyledHomeCards>
  </StyledHome>
);

export default Home;
