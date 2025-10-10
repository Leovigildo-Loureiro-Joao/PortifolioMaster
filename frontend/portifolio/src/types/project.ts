export interface Project {
  id: number;
  nome: string;
  mini_desc: string;
  descricao: string;
  obje: string;
  lance: string;
  abertura: string;
  tecno: string[];
  img: string;
  url: string;
  type: string;
  link: string;
}

export interface ProjectRequest {
  nome: string;
  mini_desc: string;
  descricao: string;
  obje: string;
  lance: string;
  type: string;
  abertura: string;
  tecno: string[];
  img: File;
  url: File;
  link: string;
}