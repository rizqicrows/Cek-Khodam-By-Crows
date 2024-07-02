function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama dulu blog!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Bus Tayo',
                'Sempol Ayam',
                'Teh Botol',
                'Mimi Peri',
                'Masako Ayam',
                'Tahu Bulat',
                'Jamal',
                'Risol Mayo',
                'Dora',
                'Tomket',
                'Asep',
                'Ragil',
                'Monyet Tantrum',
                'Rawageni',
                'Joker',
                'Kecubung',
                'Pertalite',
                'Boncabe',
                'Stella Jeruk',
                'Mio Mirza',
                'Adem Sari',
                'ES Kelapa Sawit',
                'Panjang x Lebar',
                'Sengkuni',
                'Naga Imut',
                'Tuna Mayo',
                'Nyi Roro Kidal',
                'Haji Thoriq',
                'Seblak Prasmanan',
                'Dumpling Keju'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});
