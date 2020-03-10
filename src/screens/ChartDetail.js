import React, { Suspense } from "react";
import styled from "styled-components";
import { Card } from "@urkellabs/ucl";
import { Route, Switch, Redirect } from "react-router-dom";

// Containers
import DailyDifficulty from "containers/charts/DailyDifficulty";
import DailyTransactions from "containers/charts/DailyTransactions";
import TotalSupply from "containers/charts/TotalSupply";
import TotalTransactions from "containers/charts/TotalTransactions";
import TotalBurned from "containers/charts/TotalBurned";
import AirdropStats from "containers/charts/AirdropStats";
import DailyClaims from "containers/charts/DailyClaims";
import NameClaim from "containers/charts/NameClaim";

const ChartsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CustomCard = styled(Card)`
  height: 500px;
`;

const PoweredBy = styled.div`
  text-align: right;
  padding-bottom: 24px;
  opacity: 0.6;
`;

const Graph = styled.div`
  height: 95%;
`;

export default function Charts() {
  return (
    <>
      <ChartsWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <CustomCard fullHeight>
            <Graph>
              <Switch>
                <Route exact path="/charts/supply" component={TotalSupply} />
                <Route exact path="/charts/burned" component={TotalBurned} />
                <Route
                  exact
                  path="/charts/dailytransactions"
                  component={DailyTransactions}
                />
                <Route
                  exact
                  path="/charts/totaltransactions"
                  component={TotalTransactions}
                />
                <Route
                  exact
                  path="/charts/difficulty"
                  component={DailyDifficulty}
                />
                <Route
                  exact
                  path="/charts/airdropstats"
                  component={AirdropStats}
                />
                <Route
                  exact
                  path="/charts/dailyclaims"
                  component={DailyClaims}
                />
                <Route exact path="/charts/nameclaims" component={NameClaim} />
                <Redirect to="/charts/difficulty" />
              </Switch>
            </Graph>
            <PoweredBy>Powered By HNScan API</PoweredBy>
          </CustomCard>
        </Suspense>
      </ChartsWrapper>
    </>
  );
}
