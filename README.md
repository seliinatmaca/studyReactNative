# Props( veri aktarımı)

- bir bileşenden diğerine veri aktarmak için kullanıdığımız yöntem
- her zaman üst bileşenden aşağıya doğru veri aktarım yönü vardır.

# State

# useEffect

Bileşenin ekrana gelme olayı.ComponentDidMount--Doğma

1. 1.parametre > çalışacak olan callback function
2. parametre > boş bir bağımlılık dizisi

-- `useEffect(()=>{},[])`

!!!
Bileşenin ekrandan gitme olayı.ComponentWillUnmount

1. 1.parametre > çalışacak olan callback function
2. parametre > boş bir bağımlılık dizisi
   -- çalışacak olan fonk.return satırına bir fonk eklenir bu fonk bileşen ekradan gittiğinde çalışır.

-- `useEffect(()=>{return ()=>{}}, [])`

Bileşenin props veya state aldığında değişiklik..ComponentDidUpdate--Güncellenme

1. 1.parametre > çalışacak olan callback function
2. parametre > yok

-- `useEffect(()=>{})`

Bileşenin ekrana gelme olayı.ComponentDidUpdate-2

1. 1.parametre > çalışacak olan callback function
2. parametre > dolu bir bağımlılık dizisi

-- `useEffect(()=>{},[page,button,count])`
