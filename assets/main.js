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
                'Dumpling Keju',
                'Bakso Mercon',
                'Ikan Nemo',
                'Tuyul Mohawk',
                'Rengginang',
                'Lalat Ijo',
                'Pecel Lele',
                'Kucing Pincang'
            ];
            let skillKhodam = [
                'Bermain Dan Membantu Orang',
                'Mengundang Mangsa Datang',
                'Dapat Menyegarkan Disaat Kamu Dehidrasi',
                'Menghindari Dari Ancaman Pria',
                'Membuat Mu Selalu Nafsu Makan',
                'Mengurangi Tingkat Kelaparan 5%',
                'Berhutang',
                'Mengurangi Tingkat Kelaparan 15%',
                'Membuat Lawan Bicara Anda Sakit Jiwa',
                'Membuat Lawan Kamu Gatal-gatal',
                'Membuat Anda di Jauhi Orang-orang',
                'Menghipnotis Penglihatan Sesama Jenis Menjadi Lawan Jenis',
                'Dapat Membuat Orang Disekitar Anda Kabur',
                'Rawa-rawa',
                'Membuat Takut Orang Disekitar Anda',
                'Membuat Ilusi',
                'Dapat Membuat Anda Hemat',
                'Meningkatkan Level Pedas 25%',
                'Membuat Mual-mual Orang Disekitar Anda',
                'Membuat Nama Anda Di Sebut-sebut Setiap Saat',
                'Mengurangi Panas Dalam 15%',
                'Meningkatkan Minyak Dalam Tubuh 50%',
                'X,Y',
                'Keahlian Berbicara Dan Berdebat',
                'Dapat Mengendalikan Cuaca',
                'Mengurangi Tingkat Kelaparan 35%',
                'Meningkatkan Keuatan Kidal Anda',
                '2 Bulan Sudah Haji',
                'Banyak Pilihan',
                'Meleleh Dimulut',
                'Meningkatkan Nafsu Makan Anda 85%',
                'Tersesat',
                'Mencuri Dengan Gaya',
                'Renyah',
                'Mengurangi Nafsu Makan Orang Disekitar Anda',
                'Mengurangi Tingkat Kelaparan 40%',
                'Membuat Anda Dikasihani Oleh Orang-orang'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#skill').html(`SKILL : (${skillKhodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#skill').html(`SKILL : KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});
