import { useEffect } from "react";

export default function SpecialComponent() {
  useEffect(() =>{
    document.title = 'Componente visível!';
    return () => {
      document.title = 'Reack hooks | useEffect';
    };

  }, []);
return (
  <div>
    <h3>Cheque o título da pagina!</h3>
  </div>
)

}