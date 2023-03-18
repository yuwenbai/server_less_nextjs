export async function getStaticPaths() {
    let paths = []
    let pathSingle = {params:{
        plug:'aaa'
    }}
    paths.push(pathSingle)
    pathSingle = {params:{
        plug:'aaa2'
    }}
    paths.push(pathSingle)
    pathSingle = {params:{
        plug:'aaa1'
    }}
    paths.push(pathSingle)
    console.log('aaaa paths is ',paths)
    return {paths, fallback: 'blocking'}
}
export async function getStaticProps({params}) {
 
    return {
        props:{
            page: 100,
            coin: 1001,
        },
        revalidate: 60,
    }
}

function Index(props){
    return <div> { props.page}</div>
}
export default Index