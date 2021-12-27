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

export default (props) =>{
    return(
        <div id="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
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