// EX:1

const idade = +prompt ("digita sua idade");

if (idade < 0 || idade > 120) {
    console.log("Erro de validação: Idade fora do limite permitido.");
} else if (idade >= 0 && idade <= 17) {
    console.log("Cadastro negado: Usuário menor de idade.");
} else if (idade >= 18 && idade <= 65) {
    console.log("Cadastro aprovado: Pacote Standard.");
} else if (idade >= 66 && idade <= 120) {
    console.log("Cadastro aprovado: Pacote Sênior (Isento de taxas).");
}

// Ex:2
const distanciaKm = +prompt ("digita o valor");

if (distanciaKm < 0) {
    console.log("Erro do sistema: A distância não pode ser negativa.");
} else if (distanciaKm >= 0 && distanciaKm <= 50) {
    console.log("Frete Grátis.");
} else if (distanciaKm > 50 && distanciaKm <= 150) {
    console.log("Custo do frete: R$ 25,00.");
} else if (distanciaKm > 150 && distanciaKm <= 300) {
    console.log("Custo do frete: R$ 50,00.");
} else {
    console.log("Área fora de cobertura para entregas.");
}

// Ex:3
const usoCPU = +prompt("usoCPU (de 0 a 100)");
const usoRAM = +prompt("usoRAM (de 0 a 100)");

if (usoCPU < 70 && usoRAM < 70) {
    console.log("Status: Sistema Saudável.");
} else if (usoCPU >= 90 || usoRAM >= 90) {
    console.log("CRÍTICO: Escalando novos servidores imediatamente!");
} else {
    console.log("Alerta: Consumo elevado, monitorar.");
}

// Ex:4
const rendaMensal = +prompt("Sua renda mensal");
const valorParcela = +prompt("Valor da parcela");
const scoreSerasa = +prompt("Seu score Serasa (0 a 1000)");

const comprometimento = (valorParcela / rendaMensal) * 100;

if (rendaMensal <= 0 || scoreSerasa < 0 || scoreSerasa > 1000) {
    console.log("Erro: Dados financeiros inválidos.");
} else if (comprometimento > 30 || scoreSerasa < 400) {
    console.log("Crédito negado: Risco elevado ou renda comprometida.");
} else if (scoreSerasa >= 400 && scoreSerasa <= 799) {
    console.log("Crédito aprovado: Taxa de juros padrão.");
} else {
    console.log("Crédito pré-aprovado: Taxa VIP reduzida!");
}

// Ex: 5
const valorBaseCorrida = +prompt("Valor base da corrida");
const passageirosAtivos = +prompt("Passageiros ativos");
const motoristasDisponiveis = +prompt("Motoristas disponíveis");

if (motoristasDisponiveis <= 0) {
    console.log("Indisponível: Nenhum motorista na região.");
} else {
    const taxaDemanda = passageirosAtivos / motoristasDisponiveis;

    if (taxaDemanda < 1.5) {
        console.log("Tarifa normal: R$ " + valorBaseCorrida);
    } else if (taxaDemanda < 3.0) {
        console.log("Tarifa dinâmica (1.5x): R$ " + (valorBaseCorrida * 1.5));
    } else {
        console.log("Alta demanda (2.0x): R$ " + (valorBaseCorrida * 2.0));
    }
}
// Ex: 6
const crachaAtivo = prompt("Crachá ativo? (s/n)") === "s";
const horaAtual = +prompt("Hora atual (0 a 23)");
const temAutorizacaoExtra = prompt("Tem autorização extra? (s/n)") === "s";

if (horaAtual < 0 || horaAtual > 23) {
    console.log("Erro no relógio do sistema.");
} else if (!crachaAtivo) {
    console.log("Acesso bloqueado: Crachá inativo ou inválido.");
} else if (horaAtual >= 8 && horaAtual <= 18 || temAutorizacaoExtra) {
    console.log("Acesso liberado: Bem-vindo!");
} else {
    console.log("Acesso negado: Fora do horário permitido sem autorização.");
}
// Ex: 7
const sensor1 = +prompt("Sensor 1 (°C)");
const sensor2 = +prompt("Sensor 2 (°C)");
const modoEconomia = prompt("Modo economia? (s/n)") === "s";

const media = (sensor1 + sensor2) / 2;

if (Math.abs(sensor1 - sensor2) > 10) {
    console.log("Alerta de Hardware: Falha na leitura dos sensores.");
} else if (media < 18) {
    console.log("Temperatura baixa: Desligando ar-condicionado.");
} else if (media <= 24) {
    console.log("Temperatura ideal: Mantendo ventilação padrão.");
} else if (modoEconomia) {
    console.log("Aviso: Temperatura alta, mas refrigeração máxima limitada pelo Modo Economia.");
} else {
    console.log("Perigo: Ativando resfriamento de emergência!");
}

// Ex:8
const valorCarrinho = +prompt("Valor do carrinho (R$)");
const clientePrime = prompt("Cliente Prime? (s/n)") === "s";

if (valorCarrinho <= 0) {
    console.log("Carrinho vazio: Adicione itens para continuar.");
} else if (valorCarrinho < 100) {
    console.log("Sem desconto aplicado. Total: R$ " + valorCarrinho.toFixed(2));
} else if (valorCarrinho < 300) {
    console.log("Desconto de 10% aplicado. Total: R$ " + (valorCarrinho * 0.90).toFixed(2));
} else if (!clientePrime) {
    console.log("Desconto de 15% aplicado. Total: R$ " + (valorCarrinho * 0.85).toFixed(2));
} else {
    console.log("Desconto Prime de 25% aplicado. Total: R$ " + (valorCarrinho * 0.75).toFixed(2));
}

// Ex: 9
const kwhConsumido = +prompt("kWh consumido");
const kwhGeradoSolar = +prompt("kWh gerado (solar)");
const tarifaBaseKwh = +prompt("Tarifa base por kWh");
const altoConsumoPico = prompt("Alto consumo no pico? (s/n)") === "s";

const saldoLiquido = kwhConsumido - kwhGeradoSolar;

if (kwhConsumido < 0 || kwhGeradoSolar < 0 || tarifaBaseKwh <= 0) {
    console.log("Erro de leitura: Valores de medição ou tarifa inválidos.");
} else if (saldoLiquido <= 0) {
    const credito = Math.abs(saldoLiquido);
    console.log("Crédito gerado: " + credito + " kWh. Fatura mínima: R$ 50,00.");
} else if (saldoLiquido <= 150) {
    const total = saldoLiquido * tarifaBaseKwh + 50;
    console.log("Bandeira Verde. Total a pagar: R$ " + total.toFixed(2));
} else if (!altoConsumoPico) {
    const total = (saldoLiquido * tarifaBaseKwh * 1.15) + 50;
    console.log("Bandeira Amarela. Total a pagar: R$ " + total.toFixed(2));
} else {
    const total = (saldoLiquido * tarifaBaseKwh * 1.30) + 50;
    console.log("Bandeira Vermelha (Pico). Total a pagar: R$ " + total.toFixed(2));
}