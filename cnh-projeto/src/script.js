const objetoJson = [
    {
    "id": 1,
    "estado": "AC - Acre",
    "detran": "https://www.ac.getran.com.br/site/apps/hotsite-cnh-social-ac/",
    "obrigatorio": ["CadÚnico Ativo", "Ter concluído o ensino médio"],
    "modalidades": ["CNH estudantil", "CNH Rural", "CNH Urbana"],
    "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço"],
    "observacoes": ""
    },
    { 
      "id": 2,
      "estado": "PB - Paraíba",
      "detran": "https://www.habilitacaosocial.pb.gov.br/",
      "obrigatorio": ["CadÚnico Ativo"],
      "modalidades": "CNH",
      "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço"],
      "observacoes": "Na PB as documentações podem variar conforme o segmento que você esteja incluso socialmente"
    },
    { 
        "id": 3,
        "estado": "PA - Paraíba",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"]
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      },
    { 
        "id": 4,
        "estado": "PE - Pernambuco",
        "detran": "https://cnhsocial.inf.br/cnh-social-pe-2023/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      },
    { 
        "id": 5,
        "estado": "RO - Roraima",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      },
      { 
        "id": 6,
        "estado": "Espírito Santo - ES",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 7,
        "estado": "BA - Bahia",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 8,
        "estado": "CE - Ceará",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 9,
        "estado": "RN - Rio Grande do Norte",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 10,
        "estado": "RS - Rio Grande do Sul",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 11,
        "estado": "DF - Distrito Federal",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 12,
        "estado": "AM - Amazonas",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 13,
        "estado": "MA - Maranhão",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 14,
        "estado": "GO - Goiás",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }, { 
        "id": 15,
        "estado": "MG - Minas Gerais",
        "detran": "https://cnhpd.detran.pa.gov.br/",
        "obrigatorio": ["CadÚnico Ativo", "Fundamental Completo"],
        "modalidades": ["CNH Metropolitana", "CNH Interior", "CNH Especial"],
        "documentos": ["Documento de identificação com foto","CPF","Comprovante de endereço", "Certidão Negativa de Antecedentes Criminais emitida pela Polícia Civil do Pará."],
        "observacoes": "No PA a documentação sofre alterações conforme a modalidade da ca"
      }
  ]