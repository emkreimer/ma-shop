import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


interface ProductButtonProps {
    edicao: boolean;
    permissao: boolean;
    onClick: () => void;  
}

const ProductButton: React.FC<ProductButtonProps> = ({ edicao, permissao, onClick }) => {
    if (edicao) {
        return (
            <button onClick={onClick} disabled={!permissao}>
                <SettingsOutlinedIcon />
            </button>            
        );
    } else {
        return (
            <button 
                onClick={onClick}               
                className="ml-4 mb-10 mt-5 rounded p-3 bg-secondary opacity-90 hover:opacity-100 text-white" 
                >+ Cadastrar novo produto
            </button>
        );
    };
};

export default ProductButton;