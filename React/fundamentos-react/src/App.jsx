import "./App.css";
import React from "react";

import First from './components/basic/First';
import WithParameter from './components/basic/WithParameter';
import Fragment from './components/basic/Fragment';
import Random from "./components/basic/Random";
import Card from "./components/layout/Card";
import Family from "./components/basic/Family";
import FamilyMember from "./components/basic/FamilyMember";
import StudentList from "./components/repeat/StudentList";
import ProductsTable from "./components/repeat/ProductsTable";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";
import DirectDad from "./components/comunication/DirectDad";
import IndirectDad from "./components/comunication/IndirectDad";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Megasena from "./components/megasena/Megasena";
import Greeting from "./components/classesComponent/Greeting";

export default (props) =>{
    return(
        <div id="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card title="#14 Componente de Classes" color="#add548">
                    <Greeting name="Maurício" type="Bom dia"></Greeting>
                </Card>

                <Card title="#13 Desafio Megasena" color="#adad54">
                    <Megasena></Megasena>
                </Card>

                <Card title="#12 Componente Baseado em classe (Contador)" color="#AA45FF">
                    <Contador numberInitial={5} step={3}></Contador>
                </Card>

                <Card title="#11 Componente Controlado (Input)" color="#AA45FF">
                    <Input></Input>
                </Card>

                <Card title="#10 Comunicação Indireta" color="#FF4566">
                    <IndirectDad></IndirectDad>
                </Card>

                <Card title="#09 Comunicação Direta" color="#0355FF">
                    <DirectDad></DirectDad>
                </Card>

                <Card title="#08 Renderização Condicional" color="#44FF33">
                    <EvenOrOdd number={14798}></EvenOrOdd>
                    <UserInfo user={{name: "Maurício"}}></UserInfo>
                </Card>

                <Card title="#07 Desafio de Repetição" color="#830045">
                    <ProductsTable></ProductsTable>
                </Card>

                <Card title="#06 Repetição" color="#20F">
                    <StudentList></StudentList>
                </Card>

                <Card title="#05 Componentes com Filhos" color="#880">
                    <Family lastName="Santos">
                        <FamilyMember name="Evelyn"></FamilyMember>
                        <FamilyMember name="Pedro"></FamilyMember>
                        <FamilyMember name="João"></FamilyMember>
                    </Family>
                </Card>

                <Card title="#04 Desafio de número aleatório" color="#080">
                    <Random min={0} max={100}></Random>
                </Card>

                <Card title="#03 Fragmento React">
                    <Fragment></Fragment>
                </Card>

                <Card title="#02 Componente Com Propriedade" color="#008">
                    <WithParameter title="Propriedade Título" subtitle="Propriedade Sub Título"></WithParameter>
                </Card>

                <Card title="#01 Primeiro Componente" color="#808">
                    <First/>
                </Card>
            </div>
        </div>
    );
}