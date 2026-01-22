export const aeroportosOptions = [
  /* ===================== INTERNACIONAIS (FILTRADOS) ===================== */
// 🇺🇸 ESTADOS UNIDOS
{ value: "KJFK", label: "(KJFK) John F. Kennedy International Airport, New York (NYC) - NY, Estados Unidos" },
{ value: "KLAX", label: "(KLAX) Los Angeles International Airport, Los Angeles (LAX) - CA, Estados Unidos" },
{ value: "KATL", label: "(KATL) Hartsfield-Jackson Atlanta International Airport, Atlanta (ATL) - GA, Estados Unidos" },
{ value: "KMIA", label: "(KMIA) Miami International Airport, Miami (MIA) - FL, Estados Unidos" },
{ value: "KORD", label: "(KORD) O'Hare International Airport, Chicago (CHI) - IL, Estados Unidos" },
{ value: "KSFO", label: "(KSFO) San Francisco International Airport, San Francisco (SFO) - CA, Estados Unidos" },
{ value: "KBOS", label: "(KBOS) Logan International Airport, Boston (BOS) - MA, Estados Unidos" },
{ value: "KSEA", label: "(KSEA) Seattle-Tacoma International Airport, Seattle (SEA) - WA, Estados Unidos" },
{ value: "KDFW", label: "(KDFW) Dallas/Fort Worth International Airport, Dallas (DFW) - TX, Estados Unidos" },
{ value: "KLAS", label: "(KLAS) Harry Reid International Airport, Las Vegas (LAS) - NV, Estados Unidos" },
{ value: "KIAD", label: "(KIAD) Washington Dulles International Airport, Washington (WAS) - DC, Estados Unidos" },

// 🇨🇦 CANADÁ
{ value: "CYYZ", label: "(CYYZ) Toronto Pearson International Airport, Toronto (YTO) - ON, Canadá" },
{ value: "CYUL", label: "(CYUL) Montréal–Trudeau International Airport, Montreal (YMQ) - QC, Canadá" },
{ value: "CYVR", label: "(CYVR) Vancouver International Airport, Vancouver (YVR) - BC, Canadá" },

// 🇲🇽 MÉXICO
{ value: "MMMX", label: "(MMMX) Mexico City International Airport, Cidade do México (MEX) - MX, México" },
{ value: "MMUN", label: "(MMUN) Cancún International Airport, Cancún (CUN) - MX, México" },

// 🇬🇧 REINO UNIDO
{ value: "EGLL", label: "(EGLL) London Heathrow Airport, London (LON) - UK, Reino Unido" },
{ value: "EGKK", label: "(EGKK) London Gatwick Airport, London (LON) - UK, Reino Unido" },
{ value: "EGSS", label: "(EGSS) London Stansted Airport, London (LON) - UK, Reino Unido" },

// 🇫🇷 FRANÇA
{ value: "LFPG", label: "(LFPG) Paris Charles de Gaulle Airport, Paris (PAR) - FR, França" },
{ value: "LFPO", label: "(LFPO) Paris Orly Airport, Paris (PAR) - FR, França" },

// 🇩🇪 ALEMANHA
{ value: "EDDF", label: "(EDDF) Frankfurt International Airport, Frankfurt (FRA) - DE, Alemanha" },
{ value: "EDDM", label: "(EDDM) Munich International Airport, Munique (MUC) - DE, Alemanha" },

// 🇳🇱 HOLANDA
{ value: "EHAM", label: "(EHAM) Amsterdam Airport Schiphol, Amsterdam (AMS) - NL, Holanda" },

// 🇪🇸 ESPANHA
{ value: "LEMD", label: "(LEMD) Adolfo Suárez Madrid-Barajas Airport, Madrid (MAD) - ES, Espanha" },
{ value: "LEBL", label: "(LEBL) Barcelona El Prat Airport, Barcelona (BCN) - ES, Espanha" },

// 🇵🇹 PORTUGAL
{ value: "LPPT", label: "(LPPT) Aeroporto Humberto Delgado, Lisboa (LIS) - PT, Portugal" },
{ value: "LPPR", label: "(LPPR) Aeroporto Francisco Sá Carneiro, Porto (OPO) - PT, Portugal" },

// 🇮🇹 ITÁLIA
{ value: "LIRF", label: "(LIRF) Aeroporto Leonardo da Vinci, Roma (ROM) - IT, Itália" },
{ value: "LIMC", label: "(LIMC) Aeroporto de Milão Malpensa, Milão (MIL) - IT, Itália" },

// 🇨🇭 SUÍÇA
{ value: "LSZH", label: "(LSZH) Zurich Airport, Zurique (ZRH) - CH, Suíça" },

// 🇹🇷 TURQUIA
{ value: "LTFM", label: "(LTFM) Istanbul Airport, Istambul (IST) - TR, Turquia" },

// 🇦🇪 ORIENTE MÉDIO
{ value: "OMDB", label: "(OMDB) Dubai International Airport, Dubai (DXB) - AE, Emirados Árabes Unidos" },
{ value: "OTHH", label: "(OTHH) Hamad International Airport, Doha (DOH) - QA, Catar" },
{ value: "OERK", label: "(OERK) King Khalid International Airport, Riyadh (RUH) - SA, Arábia Saudita" },

// 🇯🇵 JAPÃO
{ value: "RJAA", label: "(RJAA) Narita International Airport, Tóquio (TYO) - JP, Japão" },
{ value: "RJTT", label: "(RJTT) Haneda Airport, Tóquio (TYO) - JP, Japão" },

// 🇰🇷 COREIA DO SUL
{ value: "RKSI", label: "(RKSI) Incheon International Airport, Seul (SEL) - KR, Coreia do Sul" },

// 🇨🇳 CHINA
{ value: "VHHH", label: "(VHHH) Hong Kong International Airport, Hong Kong (HKG) - CN, China" },
{ value: "ZBAA", label: "(ZBAA) Beijing Capital International Airport, Pequim (BJS) - CN, China" },
{ value: "ZSPD", label: "(ZSPD) Shanghai Pudong International Airport, Xangai (SHA) - CN, China" },

// 🇦🇺 AUSTRÁLIA
{ value: "YSSY", label: "(YSSY) Sydney Kingsford Smith Airport, Sydney (SYD) - AU, Austrália" },
{ value: "YMML", label: "(YMML) Melbourne Airport, Melbourne (MEL) - AU, Austrália" },

// 🇿🇦 ÁFRICA DO SUL
{ value: "FAOR", label: "(FAOR) O.R. Tambo International Airport, Joanesburgo (JNB) - ZA, África do Sul" },

// 🇦🇷 AMÉRICA DO SUL
{ value: "SAEZ", label: "(SAEZ) Aeropuerto Internacional Ministro Pistarini, Buenos Aires (BUE) - AR, Argentina" },
{ value: "SCEL", label: "(SCEL) Arturo Merino Benítez International Airport, Santiago (SCL) - CL, Chile" },
{ value: "SKBO", label: "(SKBO) El Dorado International Airport, Bogotá (BOG) - CO, Colômbia" },
{ value: "SPJC", label: "(SPJC) Jorge Chávez International Airport, Lima (LIM) - PE, Peru" },


  /* ===================== BRASIL (TODOS) ===================== */
  { value: "SBBR", label: "(SBBR) Aeroporto Internacional Presidente Juscelino Kubitschek, Brasília (BSB) - DF, Brasil" },
  { value: "SBGR", label: "(SBGR) Aeroporto Internacional de Guarulhos, São Paulo (GRU) - SP, Brasil" },
  { value: "SBSP", label: "(SBSP) Aeroporto de Congonhas, São Paulo (SAO) - SP, Brasil" },
  { value: "SBKP", label: "(SBKP) Aeroporto Internacional de Viracopos, Campinas (VCP) - SP, Brasil" },
  { value: "SBGL", label: "(SBGL) Aeroporto Internacional Tom Jobim (Galeão), Rio de Janeiro (RIO) - RJ, Brasil" },
  { value: "SBRJ", label: "(SBRJ) Aeroporto Santos Dumont, Rio de Janeiro (RIO) - RJ, Brasil" },
  { value: "SBFZ", label: "(SBFZ) Aeroporto Internacional Pinto Martins, Fortaleza (FOR) - CE, Brasil" },
  { value: "SBSV", label: "(SBSV) Aeroporto Internacional Deputado Luís Eduardo Magalhães, Salvador (SSA) - BA, Brasil" },
  { value: "SBRF", label: "(SBRF) Aeroporto Internacional dos Guararapes, Recife (REC) - PE, Brasil" },
  { value: "SBJU", label: "(SBJU) Aeroporto Regional do Cariri – Orlando Bezerra de Menezes, Juazeiro do Norte (JDO) - CE, Brasil" },
  { value: "SBCO", label: "(SBCO) Base Aérea de Canoas, Canoas (QNS) - RS, Brasil" },
  { value: "SBPA", label: "(SBPA) Aeroporto Internacional Salgado Filho, Porto Alegre (POA) - RS, Brasil" },
  { value: "SBFL", label: "(SBFL) Aeroporto Internacional Hercílio Luz, Florianópolis (FLN) - SC, Brasil" },
  { value: "SBCT", label: "(SBCT) Aeroporto Internacional Afonso Pena, Curitiba (CWB) - PR, Brasil" },
  { value: "SBCF", label: "(SBCF) Aeroporto Internacional Tancredo Neves, Confins (CNF) - MG, Brasil" },
  { value: "SBMO", label: "(SBMO) Aeroporto Internacional Zumbi dos Palmares, Maceió (MCZ) - AL, Brasil" },
  { value: "SBNT", label: "(SBNT) Aeroporto Internacional Governador Aluízio Alves, Natal (NAT) - RN, Brasil" },
  { value: "SBJP", label: "(SBJP) Aeroporto Internacional Presidente Castro Pinto, João Pessoa (JPA) - PB, Brasil" },
  { value: "SBKG", label: "(SBKG) Aeroporto Presidente João Suassuna, Campina Grande (CPV) - PB, Brasil" },
  { value: "SBAR", label: "(SBAR) Aeroporto Santa Maria, Aracaju (AJU) - SE, Brasil" },
  { value: "SBIL", label: "(SBIL) Aeroporto Jorge Amado, Ilhéus (IOS) - BA, Brasil" },
  { value: "SBPS", label: "(SBPS) Aeroporto de Porto Seguro, Porto Seguro (BPS) - BA, Brasil" },
  { value: "SBFN", label: "(SBFN) Aeroporto de Fernando de Noronha, Fernando de Noronha (FEN) - PE, Brasil" },
  { value: "SBTE", label: "(SBTE) Aeroporto Senador Petrônio Portella, Teresina (THE) - PI, Brasil" },
  { value: "SBSL", label: "(SBSL) Aeroporto Marechal Cunha Machado, São Luís (SLZ) - MA, Brasil" },
  { value: "SBPB", label: "(SBPB) Aeroporto Internacional de Parnaíba, Parnaíba (PHB) - PI, Brasil" },
  { value: "SBGO", label: "(SBGO) Aeroporto Santa Genoveva, Goiânia (GYN) - GO, Brasil" },
  { value: "SBMG", label: "(SBMG) Aeroporto Sílvio Name Júnior, Maringá (MGF) - PR, Brasil" },
  { value: "SBCG", label: "(SBCG) Aeroporto Internacional de Campo Grande, Campo Grande (CGR) - MS, Brasil" },
  { value: "SBCY", label: "(SBCY) Aeroporto Marechal Rondon, Cuiabá (CGB) - MT, Brasil" },
  { value: "SBPV", label: "(SBPV) Aeroporto Governador Jorge Teixeira, Porto Velho (PVH) - RO, Brasil" },
  { value: "SBEG", label: "(SBEG) Aeroporto Internacional Eduardo Gomes, Manaus (MAO) - AM, Brasil" },
  { value: "SBBE", label: "(SBBE) Aeroporto Internacional de Belém/Val-de-Cans, Belém (BEL) - PA, Brasil" },
  { value: "SBVH", label: "(SBVH) Aeroporto Brigadeiro Camarão, Vilhena (BVH) - RO, Brasil" },
  { value: "SBCR", label: "(SBCR) Aeroporto Internacional de Corumbá, Corumbá (CMG) - MS, Brasil" },
  { value: "SBDB", label: "(SBDB) Aeroporto de Bonito, Bonito (BYO) - MS, Brasil" },

]
  .filter(aeroporto => /^[A-Z]{4}$/.test(aeroporto.value))
  .sort((a, b) =>
    a.label.localeCompare(b.label, "pt-BR", { sensitivity: "base" })
  );