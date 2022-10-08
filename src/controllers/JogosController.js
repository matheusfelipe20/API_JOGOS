const HOJE = new Date();
const formatDate = (date) => { return date.toISOString().split('T')[0]}
const addDayDate = (date, days) => { return new Date(date.setDate(date.getDate() + days)) }

class JogosController {
    campeonatos(req, res){
        return res.json([
            { id: 30, titulo: "Brasileirão - Serie A"},
            { id: 35, titulo: "Copa América - Feminina"},
            { id: 36, titulo: "Uruguai - Primeira Divisão"},
        ])

    }
    obter(req, res){
        return res.json([
            {
                id: 354858757161272,
                titulo: "São Paulo x Flamengo",
                id_campeonato: 30,
                data: formatDate(HOJE),
                opcoes: [ { 1: 2.5 }, { x: 3.1 }, { 2: 1.5 } ],
                limites: [ { 1: 150 }, { x: 500 }, { 2: 750 } ]
            },
            {
                id: 354858757161273,
                titulo: "Fluminense x Palmeiras",
                id_campeonato: 30,
                data: formatDate(addDayDate(HOJE, 3)),
                opcoes: [ { 1: 1.25 }, { x: 4.5 }, { 2: 3.9 } ],
                limites: [ { 1: 1000 }, { x: 1000 }, { 2: 1000 } ]
            },
            {
                id: 354858757161274,
                titulo: "Botafogo x Santos",
                id_campeonato: 30,
                data: "2022-07-15",
                opcoes: [ { 1: 10.14 }, { x: 2.5 }, { 2: 1.7 } ],
                limites: [ { 1: 650 }, { x: 750 }, { 2: 500 } ]
            },
            {
                id: 354858757161275,
                titulo: "Vasco x Atlético",
                id_campeonato: 30,
                data: formatDate(addDayDate(HOJE, 1)),
                opcoes: [ { 1: 1.25 }, { x: 4.5 }, { 2: 3.9 } ],
                limites: [ { 1: 1000 }, { x: 1000 }, { 2: 1000 } ]
            },
            {
                id: 354858757161276,
                titulo: "Ceará x Avaí",
                id_campeonato: 30,
                data: formatDate(addDayDate(HOJE, 7)),
                opcoes: [ { 1: 10.14 }, { x: 2.5 }, { 2: 1.7 } ],
                limites: [ { 1: 650 }, { x: 750 }, { 2: 500 } ]
            },
            //Copa América feminina
            {
                id: 354858324654689,
                titulo: "Colômbia x Chile",
                id_campeonato: 35,
                data: formatDate(addDayDate(HOJE, 7)),
                opcoes: [ { 1: 1.63 }, { x: 3.84 }, { 2: 5.09 } ],
                limites: [ { 1: 500 }, { x: 500 }, { 2: 500 } ]
            },
            {
                id: 354858324654690,
                titulo: "Equador x Paraguai",
                id_campeonato: 35,
                data: "2022-07-15",
                opcoes: [ { 1: 5.77 }, { x: 4.32 }, { 2: 1.5 } ],
                limites: [ { 1: 650 }, { x: 750 }, { 2: 500 } ]
            },
            //Uruguai
            {
                id: 65489162165498,
                titulo: "Liverpool FC x AlbionFC",
                id_campeonato: 36,
                data: "2022-07-15",
                opcoes: [ { 1: 5.77 }, { x: 4.32 }, { 2: 1.5 } ],
                limites: [ { 1: 650 }, { x: 750 }, { 2: 500 } ]
            },
            {
                id: 65489162165499,
                titulo: "Deportivo Maldonado x Torque da Cidade de Montevideu",
                id_campeonato: 36,
                data: formatDate(addDayDate(HOJE, 3)),
                opcoes: [ { 1: 1.25 }, { x: 4.5 }, { 2: 3.9 } ],
                limites: [ { 1: 0 }, { x: 0 }, { 2: 0 } ]
            },
        ])
    }
}

module.exports = JogosController