# Props(veri aktarımı)

- bir bileeşnden diğerine veri aktarmak için kullndığımız yöntem.

- her zaman üstten ağaıya doğru üstte ki bileşen çocuk bileşene doğru bir veri aktarım yönü var.

# State'in Ortaya Çıkma Noktası

React uygulamalarında bileşen içeirinde kullanıcı etkileşimi sonucu arayğzde değişim olmasını isteriz.(ör; bit butona tıklandığında tema değişimi)

# State

state: bileşen içerinde verileri saklamya yarayan ve yönetmeye yarayan yapıdır.

state'in değeri her değiştiğinde bileşen otomatik olarak tekrardan render olur.(bu sayede state'e bağlı olarak görünümü değişecek olan arazyüz yapıları güncellemiş olur)

eğer ki tuttuğumuz değişkenin değerin de bir değişiklik oldupunda arayüz de bir değişim olması gerekiyorsa state tercih ediyoruz.

useState(x) : useState'i kullanırken x yazılan yere "initial state" denir."başlangıç değeri" : statin bileşen ekranına basıldığı anda sahip olacağı değer.

usestate ile tutulan bir değeri değiştirmenin tek yolu vardır, usestatin döndürdüğü setter fonksiyonu kullanmak.

# Component

- react'ta iki çeşit component bulunur.

1. Class Components:

- Fuction component'lar ortaya çıkmadan önce kullanılıdır.
- Modern projelerde yerini function'a bıraktıları
- Hooks kullanımı mevcut değil.

2. Function Component:

- Modern projelerde class'lar fazla kod alanı kapladığından class'ın sahip olduğu state , lifecycle vc. özelliklere sahip olmamasına rağmen react hookları sayesinde class'ların bütün özelliklerini fonksiyonlar'da edindiler. Ve daha az ko alanı kapladığı ve daha okunabilir olduğu için günümüzde bir react projesine başlandığı zman her koşulda ilk tercihimiz olucaktır.

# Lifecycle (Yaşam Döngüsü)

- React bileşeneride normal bir canlı gibi yaşam döngüsüne sahiptir. Bu döngü 3 aşamadan oluşur.

1. Doğma - Mount (Ekrana Basılma) - componentDidMount()

2. Gelişme - Update (Güncelleneme) - componentDidUpdate()

3. Ölme - UnMount (Ekrandan Gitme) - componentWillUnmount()

- Bizim bu yaşam döngüsüne hakim olmamız ve izlyebilmemiz gerekir.

- Bileşen ekrana basıldığı ilk anda, bileşen her güncellendiği sırada veya bileşen ekrandan kaldırılırken bu olayları izleyip fonksiyonlar çalıştırmak isteyebilir.

## Örnekler

- Örneğn bileşen ekrana geldiği ilk anda api isteği atıp verileri almak isteyebiliriz.

- Bileşenin tutuğu sayfa state her değitğinde yeni sayfanın içerğinği almak isteyebiliriz.

- Bileşen ekrandan gittiği anda sürekli tekrar eden bir işlemi ve bitmeyen bir sayacı durdurmak isteyebiliri.

- Class componentlarda yaşam döngüsünü izlememiz sağlayan bazı methodlar mevcut.

## Not

- Class'ların sahip olduğu ama function'ların sahip olmadığı özellikler için funcların'da bu özellikleri kullanabilmesi için react hook' larını ortaya çıkarıyor

- Class c.'ların sahip oldğu özellikleri function c.'larda kullanmazı sağlar.

- Class c.'larındaki state özelliğini function c.'larında "useState" hookuyla kullanırız.

- Class c.'larındaki yaşam döngü özelliklelerini functioon c.'larda "useEffect" hookuyla kullanırız.

# useEffect

- Amacı: class'lardaki componentDidMount | componentDidUpdate | componentWillUnamount yerine function c'larda kullanılır.

- Fonksiyonel bileşenlerde yaşam döngüsünü izlememizi sağlar

# Kullanımlar

1. ComponentDidMount :bileşenin ekrana gelme olayını izlemye yarar.

- - 1.parametre > çalışacak olan callback function
- - 2.parametre > boş bir bağımlılık dizisi
- - `useEffect(()=>{},[])`

2. ComponenetWillUnmount : bileşenin ekrandan gitmesi olayını izler

- - 1.parametre > çalışacak olan callback function
- - 2.parametre > boş bir bağımlılık dizisi
- - çalşacak olan fonk.return satırına bir fonk.eklenir ve bu fon.bilşene ekrandan gittiğinde çalışır.

- - `useEffect(()=>{return ()=>{}},[])`

3. CommponenetDidUpdate : props veya state her değiştiğinde çalışan yöntem

- - 1.parametre > çalışacak olan callback function
- - 2.parametre > yok

`useEffect(()=>{})`

4. CommponenetDidUpdate-2 : 'Belirlediğimiz' props veya state her değiştiğinde çalışan yöntem

- - 1.parametre > çalışacak olan callback function
- - 2.parametre > dolu bir bağımlılık dizisi
    `useEffect(()=>{},[page])`
# studyReactNative
