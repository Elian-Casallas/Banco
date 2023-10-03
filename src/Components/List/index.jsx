import React from "react";
import { Box, Btn } from "../UI";
import {listas} from "../../info.js"
import Card from "../Card";

const Lista = () => {
    return <Box>
        {
            listas.cargos.map( (cargo, i) => {
                return <Card key = {i} cargo={cargo}>
                </Card>
            })
        }
        <Btn>Ver más</Btn>
    </Box>
}

export default Lista;