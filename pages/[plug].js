
import {getInfo} from './api/grasp'
export async function getStaticPaths() {
    let paths = []
    let pathSingle = {params:{
        plug:'aaa'
    }}
    console.log('aaaa  456 ',performance.now())
    let a = await getInfo()
    console.log('aaaa  123 ',performance.now())
    console.log('aaa a is ',a)
    paths.push(pathSingle)
    for(let i = 0 ;i<400000;++i){
        let pathSingle = {params:{
            plug:'aaa2-'+i
        }}
        paths.push(pathSingle)
    }
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
 
    console.log('aa getStaticProps begin',performance.now())
    let a = await getInfo()
    console.log('aa getStaticProps end ',performance.now())
    return {
        props:{
            page: params.plug,
            coin: 1001,
        },
        revalidate: 60,
    }
}

function Index(props){
    return <div> { props.page}</div>
}
export default Index