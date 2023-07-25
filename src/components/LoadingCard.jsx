import ContentLoader from "react-content-loader";

function LoadingCard() {
    return (
        [...Array(10).keys()].map((item) => (
            <div className="content__products-item product" key = { item } >
                <ContentLoader 
                    speed={2}
                    width={160}
                    height={215}
                    viewBox="0 0 160 215"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="556" y="228" rx="3" ry="3" width="88" height="6" /> 
                    <rect x="551" y="220" rx="3" ry="3" width="52" height="6" /> 
                    <rect x="444" y="228" rx="3" ry="3" width="410" height="6" /> 
                    <rect x="444" y="244" rx="3" ry="3" width="380" height="6" /> 
                    <rect x="444" y="260" rx="3" ry="3" width="178" height="6" /> 
                    <circle cx="579" cy="231" r="20" /> 
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="120" rx="5" ry="5" width="150" height="15" /> 
                    <rect x="0" y="140" rx="3" ry="3" width="90" height="15" /> 
                    <rect x="0" y="185" rx="8" ry="8" width="80" height="25" /> 
                    <rect x="125" y="180" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            </div>)
        )
    )
}

export default LoadingCard;