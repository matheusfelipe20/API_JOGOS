
class CpfController {
    consultar(req, res){
        let pessoa = {}

        switch (req.params.numero) {
            case '83604761794':
                pessoa = { cpf: "836.047.617-94", nome: "Tomás Breno Fogaça", nascimento: "22/05/1990" }
                break;
            case '36806792979':
                pessoa = { cpf: "368.067.929-79", nome: "Lara Nair Santos", nascimento: "20/06/1991" }
                break;
            case '46110334499':
                pessoa = { cpf: "461.103.344-99", nome: "José Pietro Cavalcanti", nascimento: "09/07/1944" }
                break;
            case '23130011480':
                pessoa = { cpf: "231.300.114-80", nome: "Carolina Silvana Ferreira", nascimento: "21/05/2008" }
                break;
            default:
                pessoa = { mensagem: "Pessoa não localizada"}

        }
        
        return res.json(pessoa);
    }
}

module.exports = CpfController