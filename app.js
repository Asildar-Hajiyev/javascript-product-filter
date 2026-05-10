let tbodylist = document.getElementById('tbodylist')
let selectPrice = document.getElementById('selectPrice')
let selectDep = document.getElementById('selectDep')
let searchInput = document.getElementById('searchInput')
getFullData = []

let BASE_URL = 'https://69f28857b15130b97352fd41.mockapi.io/productSale'

function getData(){
    fetch(BASE_URL)
    .then(resp=>resp.json())
    .then(json=>{
        getFullData = json
        tbodylist.innerHTML = ""

        json.map(item=>{
            tbodylist.innerHTML +=`
                 <tr class="border-b border-gray-100 hover:bg-gray-50 duration-200">
                        <td class="p-4 text-gray-500">${item.id}</td>

                        <td class="p-4 font-semibold text-gray-800">
                           ${item.name}
                        </td>

                        <td class="p-4 text-gray-600">
                            ${item.role}
                        </td>

                        <td class="p-4">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                ${item.department}
                            </span>
                        </td>

                        <td class="p-4 font-semibold text-green-600">
                            ${item.price} ₼
                        </td>
                    </tr>
            `
        })

    })
}
getData()



/* Biz bu hissədə select-option ilə her deyismede dataların map olmağını yoxladıq */

selectPrice.addEventListener('change', function() {
    let value = selectPrice.value
    
    tbodylist.innerHTML = ''
    
    let filtered = getFullData.filter(p => {
        if (value == '1') return p.price < 500
        if (value == '2') return p.price >= 500 && p.price <= 1000
        if (value == '3') return p.price > 1000
        return true  // hamisi
    })
    
    filtered.map(item => {
        tbodylist.innerHTML +=`
                 <tr class="border-b border-gray-100 hover:bg-gray-50 duration-200">
                        <td class="p-4 text-gray-500">${item.id}</td>

                        <td class="p-4 font-semibold text-gray-800">
                           ${item.name}
                        </td>

                        <td class="p-4 text-gray-600">
                            ${item.role}
                        </td>

                        <td class="p-4">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                ${item.department}
                            </span>
                        </td>

                        <td class="p-4 font-semibold text-green-600">
                            ${item.price} ₼
                        </td>
                    </tr>
            `
    })
})
selectDep.addEventListener('change', function() {
    let value = selectDep.value
    
    tbodylist.innerHTML = ''
    
    let filtered = getFullData.filter(p => {
        if (value == 'Audio') return p.department == 'Audio'
        if (value == 'Wearables') return p.department == 'Wearables'
        if (value == 'Mobile') return p.department == 'Mobile'
        if (value == 'Computing') return p.department == 'Computing'
        if (value == 'Tablets') return p.department == 'Tablets'
        if (value == 'Gaming') return p.department == 'Gaming'
        return true  // hamisi
    })
    
    filtered.map(item => {
        tbodylist.innerHTML +=`
                 <tr class="border-b border-gray-100 hover:bg-gray-50 duration-200">
                        <td class="p-4 text-gray-500">${item.id}</td>

                        <td class="p-4 font-semibold text-gray-800">
                           ${item.name}
                        </td>

                        <td class="p-4 text-gray-600">
                            ${item.role}
                        </td>

                        <td class="p-4">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                ${item.department}
                            </span>
                        </td>

                        <td class="p-4 font-semibold text-green-600">
                            ${item.price} ₼
                        </td>
                    </tr>
            `
    })
})


searchInput.addEventListener('input' , function(){
   tbodylist.innerHTML = ""
    let searchValue = searchInput.value
    searchProduct(searchValue)

})

function searchProduct(searchInput){
    let keywords = searchInput.toLowerCase()
    console.log(keywords)
    /* Qısa icmal - datamızın içine girib filtir eledik ki nam deyiskenini balacalt ve icine daxil ol 
    ve iclude ele yeni yuxaridaki keyvords duzduse true qaytar eks halda false */
    /* İcludes 2 deyer qaytardı TRUE And False */
    const filterProduct = getFullData.filter(item=>item.name.toLowerCase().includes(keywords))
     filterProduct.map(item => {
        tbodylist.innerHTML +=`
                 <tr class="border-b border-gray-100 hover:bg-gray-50 duration-200">
                        <td class="p-4 text-gray-500">${item.id}</td>

                        <td class="p-4 font-semibold text-gray-800">
                           ${item.name}
                        </td>

                        <td class="p-4 text-gray-600">
                            ${item.role}
                        </td>

                        <td class="p-4">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                ${item.department}
                            </span>
                        </td>

                        <td class="p-4 font-semibold text-green-600">
                            ${item.price} ₼
                        </td>
                    </tr>
            `
    })

}


