import React from 'react'
import style from './ProcessMobile.module.scss'

const Manual = () => {
  return (
    <div className={style.container}>
      <div className={style.line}></div>
      <div className={style.dots}>
        <div className={style.section}>
          <div className={style.real}></div>
          <div className={style.caption}>Top Up Awal</div>
          <div className={style.caption}>Klien top up dana saldo proyek, minimum 30% dari nilai taksiran seluruh pekerjaan</div>
        </div>
        <div className={style.section}>
          <div className={style.real}></div>
          <div className={style.caption}>Pengerjaan</div>
          <div className={style.caption}>Serasa Construction, menggunakan saldo untuk pembelanjaan material & pembayaran upah pekerja dengan profesional, amanah, dan akuntabel</div>
          <div className={style.caption}>Saldo akan dipotong sesuai dengan jumlah pembelanjaan material dan upah, ditambah dengan fee untuk Serasa sebesar 17-20%</div>
          <div className={style.caption}>Setiap hari klien mendapatkan laporan progress pekerjaan. Dan rekap laporan keuangan di setiap minggunya</div>
        </div>
        <div className={style.section}>
          <div className={style.real}></div>
          <div className={style.caption}>Top Up Berkala</div>
          <div className={style.caption}>Apabila Saldo menjelang habis, Klien akan diingatkan untuk melakukan top up kembali, sehingga pekerjaan lapangan terus berlanjut</div>
        </div>
        <div className={style.section}>
          <div className={style.real}></div>
          <div className={style.caption}>Selesai</div>
          <div className={style.caption}>Apabila pekerjaan sudah mencapai 100%. Pekerjaan akan dihentikan dan sisa saldo akan dikembalikan.</div>
        </div>
        <div className={style.section}>
          <div className={style.real}></div>
          <div className={style.caption}>Pemeliharaan</div>
          <div className={style.caption}>
            Proyek masuk ke masa pemeliharaan & garansi, selama 60 hari. segala bentuk kerusakan / kebocoran yang terjadi karena kualitas pekerjaan akan menjadi tanggung jawab Serasa Construction
          </div>
        </div>
      </div>
      {/* <div>sdsd</div> */}
    </div>
  )
}

export default Manual
