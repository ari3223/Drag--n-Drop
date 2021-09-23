class API {
    get_texts(name, pass){
        post()
        async function post() {
            const url = new URL("http://localhost:3000/api/user/")
            try {
                let info = await fetch(url, {
                    method: 'POST',
                    headers: {
                       
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({"name": name,"password": pass})
                  });
                 
                  const typ = info.headers.get('content-type')
                if (typ.startsWith('application/json')) {
                    let data = await info.json();
                    console.log(data);
                }
                if (typ.startsWith('text/html')) {
                    let data = await info.text();
                    console.log(data);
                }
                
            } catch(error){
                console.log(error);
            }
            
        }
        
          
        
    }
}