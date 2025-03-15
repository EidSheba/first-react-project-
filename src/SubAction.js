import "./style.css"
export default function SubAction({ visable, errorAge = null }) {
    if (visable)
    {
         return (
        <div class = "parent-sub">
                 <div class="content-sub">
                     
                <h1 style={{color: errorAge ? "red" : "green" }} >{errorAge != null? errorAge :"Has been submitted."}</h1>
            </div>
      </div>
    )
    }
    else {
        return <></>
    }
   
}