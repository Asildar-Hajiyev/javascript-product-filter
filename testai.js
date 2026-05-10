/* function filterAll() {
    let keywords = searchInput.value.toLowerCase()
    let depValue = selectDep.value
    let priceValue = selectPrice.value

    let filtered = getFullData.filter(item => {
        let s1 = item.name.toLowerCase().includes(keywords)
        let s2 = depValue == 'Bütün departamentlər' || item.department == depValue
        let s3
        
        if(priceValue == '1') s3 = item.price < 500
        else if(priceValue == '2') s3 = item.price >= 500 && item.price <= 1000
        else if(priceValue == '3') s3 = item.price > 1000
        else s3 = true

        return s1 && s2 && s3
    })

    tbodylist.innerHTML = ''

    filtered.map(item => {
        tbodylist.innerHTML += `
            <tr class="border-b border-gray-100 hover:bg-gray-50 duration-200">
                <td class="p-4 text-gray-500">${item.id}</td>
                <td class="p-4 font-semibold text-gray-800">${item.name}</td>
                <td class="p-4 text-gray-600">${item.role}</td>
                <td class="p-4">
                    <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        ${item.department}
                    </span>
                </td>
                <td class="p-4 font-semibold text-green-600">${item.price} ₼</td>
            </tr>
        `
    })
}

searchInput.addEventListener('input', filterAll)
selectDep.addEventListener('change', filterAll)
selectPrice.addEventListener('change', filterAll)

 */