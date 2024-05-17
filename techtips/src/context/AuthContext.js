import { useContext, createContext } from "react";

const AuthContext = createContext(); //cria novo contexto p/ compartilhar dados de autenticação

export function AuthProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} //children são os componentes que serão envolvidos pelo AuthContext.Provider e que terão acesso ao valor do contexto (valores de autenticação do usuário).

export function useAuthValue() {
    return useContext(AuthContext);
} 

//Um contexto permite passar dados através da árvore de componentes sem precisar passar props manualmente em cada nível.