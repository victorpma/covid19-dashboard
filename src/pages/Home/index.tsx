import React, { useEffect, useState } from "react";
import apiGlobal from "../../services/apiGlobal";
import apiBrazil from "../../services/apiBrazil";
import apiMapGlobal from "../../services/apiMapGlobal";

import CardFloat from "../../components/CardFloat";
import ChartLine from "../../components/Charts/Line";
import ChartBar from "../../components/Charts/Bar";
import Map from "../../components/Map/StaticsMap";

import * as S from "./styled";

interface Country {
  Country: string;
  CountryCode: string;
  TotalConfirmed: number;
  TotalDeaths: number;
}

interface SummaryGlobal {
  Global: {
    TotalConfirmed: number;
    TotalDeaths: number;
  };
  Countries: Array<Country>;
}

interface StatsUF {
  uid: number;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
}

interface CountryMap {
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
}

const regionNorth = ["RO", "AC", "AM", "RR", "PA", "AP", "TO"];
const regionNortheast = ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"];
const regionSoutheast = ["MG", "ES", "RJ", "SP"];
const regionSouth = ["PR", "SC", "RS"];
const regionMidwest = ["MS", "MT", "GO", "DF"];

const Home = () => {
  const [summaryGlobal, setSummaryGlobal] = useState<SummaryGlobal>();
  const [statsUFBrazil, setStatsUFBrazil] = useState<StatsUF[]>([]);
  const [casesRegionNorth, setCasesRegionNorth] = useState<number>(0);
  const [casesRegionNortheast, setCasesRegionNortheast] = useState<number>(0);
  const [casesRegionSoutheast, setCasesRegionSoutheast] = useState<number>(0);
  const [casesRegionMidwest, setCasesRegionMidwest] = useState<number>(0);
  const [casesRegionSouth, setCasesRegionSouth] = useState<number>(0);
  const [countriesMap, setCountriesMap] = useState<CountryMap[]>([]);

  useEffect(() => {
    apiGlobal.get("summary").then((response) => {
      setSummaryGlobal(response.data);
    });
  }, []);

  useEffect(() => {
    apiBrazil.get("").then((response) => {
      setStatsUFBrazil(response.data.data);

      let ufsNorth = response.data.data.filter(
        (state: any) => regionNorth.indexOf(state.uf) > -1
      );
      let ufsNotheast = response.data.data.filter(
        (state: any) => regionNortheast.indexOf(state.uf) > -1
      );
      let ufsSoutheast = response.data.data.filter(
        (state: any) => regionSoutheast.indexOf(state.uf) > -1
      );
      let ufsMidwest = response.data.data.filter(
        (state: any) => regionMidwest.indexOf(state.uf) > -1
      );
      let ufsSouth = response.data.data.filter(
        (state: any) => regionSouth.indexOf(state.uf) > -1
      );

      setCasesRegionNorth(
        ufsNorth.reduce((sum: any, uf: any) => sum + uf.cases, 0)
      );
      setCasesRegionNortheast(
        ufsNotheast.reduce((sum: any, uf: any) => sum + uf.cases, 0)
      );
      setCasesRegionSoutheast(
        ufsSoutheast.reduce((sum: any, uf: any) => sum + uf.cases, 0)
      );
      setCasesRegionMidwest(
        ufsMidwest.reduce((sum: any, uf: any) => sum + uf.cases, 0)
      );
      setCasesRegionSouth(
        ufsSouth.reduce((sum: any, uf: any) => sum + uf.cases, 0)
      );
    });
  }, []);

  useEffect(() => {
    apiMapGlobal.get("countries").then((response) => {
      setCountriesMap(response.data);
    });
  }, []);

  const state = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: [
      {
        label: "Casos confirmados no Brasil",
        backgroundColor: "rgba(0,255,0,.5)",
        borderColor: "#fff",
        borderWidth: 2,
        data: [0, 1, 4255, 67630, 453140],
      },

      {
        label: "Casos confirmados no Mundo",
        backgroundColor: "rgba(0,0,255,.5)",
        borderColor: "#fff",
        borderWidth: 2,
        data: [9847, 76044, 668988, 2347687, 2760247],
      },
    ],
  };

  const graphRegion = {
    labels: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
    datasets: [
      {
        label: "Casos confirmados por região",
        backgroundColor: "rgba(0,0,255,.5)",
        borderColor: "#fff",
        borderWidth: 2,
        data: [
          casesRegionNorth,
          casesRegionNortheast,
          casesRegionMidwest,
          casesRegionSoutheast,
          casesRegionSouth,
        ],
      },
    ],
  };

  return (
    <S.Container>
      <S.Header>
        <h1>
          Covid-19 <span>No Brasil e no Mundo</span>
        </h1>
        <p>
          Dados atualizados em: <span>17/06/2020</span>
        </p>
      </S.Header>
      <S.Main>
        <S.SectionSummary>
          <S.CardsSummary>
            <CardFloat
              title="Mundial"
              value={summaryGlobal?.Global.TotalConfirmed.toLocaleString("pt")}
              description="Casos confirmados"
            />
            <CardFloat
              title="Mundial"
              value={summaryGlobal?.Global.TotalDeaths.toLocaleString("pt")}
              description="Mortes confirmadas"
            />
            <CardFloat
              title="Brasil"
              value={summaryGlobal?.Countries.find(
                (country) => country.Country === "Brazil"
              )?.TotalConfirmed.toLocaleString("pt")}
              description="Casos confirmados"
            />
            <CardFloat
              title="Brasil"
              value={summaryGlobal?.Countries.find(
                (country) => country.Country === "Brazil"
              )?.TotalDeaths.toLocaleString("pt")}
              description="Mortes confirmadas"
            />
          </S.CardsSummary>
          <S.GraphSummary>
            <h3>Evolução casos confirmados Brasil x Mundo</h3>
            <ChartLine height={100} data={state} />
          </S.GraphSummary>
        </S.SectionSummary>
        <S.SectionStatsCase>
          <S.ContainerCasesStats>
            <h3>Casos no Brasil</h3>
            <p>Número de casos, mortes e letalidade por Estados brasileiros.</p>
            <S.Table>
              <thead>
                <tr>
                  <th>Estado</th>
                  <th>Casos</th>
                  <th>Mortes</th>
                  <th>Letalidade</th>
                </tr>
              </thead>
              <tbody>
                {statsUFBrazil.map((statsUF) => (
                  <tr key={statsUF.uid}>
                    <td>{statsUF.state}</td>
                    <td>{statsUF.cases.toLocaleString("pt")}</td>
                    <td>{statsUF.deaths.toLocaleString("pt")}</td>
                    <td>
                      {((statsUF.deaths * 100) / statsUF.cases).toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.ContainerCasesStats>
          <S.ContainerCasesStats>
            <h3>Casos no Mundo</h3>
            <p>Número de casos, mortes e letalidade por País.</p>
            <S.Table>
              <thead>
                <tr>
                  <th>País</th>
                  <th>Casos</th>
                  <th>Mortes</th>
                  <th>Letalidade</th>
                </tr>
              </thead>
              <tbody>
                {summaryGlobal?.Countries.map((country) => (
                  <tr key={country.CountryCode}>
                    <td>{country.Country}</td>
                    <td>{country.TotalConfirmed.toLocaleString("pt")}</td>
                    <td>{country.TotalDeaths.toLocaleString("pt")}</td>
                    <td>
                      {(
                        (country.TotalDeaths * 100) /
                        country.TotalConfirmed
                      ).toFixed(2)}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.ContainerCasesStats>
        </S.SectionStatsCase>
        <S.SectionStatsRegions>
          <h3>Casos por regiões no Brasil</h3>
          <p>Estatística de Casos x Morte nas regiões brasileiras.</p>
          <ChartBar height={100} data={graphRegion} />
        </S.SectionStatsRegions>
        <S.SectionMapGlobal>
          <h3>Estatísticas Globais</h3>
          <p>
            Mapa contendo estatísticas por país (População, Casos confirmados,
            Óbitos)
          </p>
          <Map children={countriesMap} />
        </S.SectionMapGlobal>
      </S.Main>
    </S.Container>
  );
};

export default Home;
