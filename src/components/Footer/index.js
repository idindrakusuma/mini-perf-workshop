import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Footer() {
  const disqusInit = React.useRef(false);

  React.useEffect(() => {
    if (disqusInit.current) return;

    const initDisqus = () => {
      var d = document,
        s = d.createElement('script'),
        count = d.createElement('script');
      s.src = 'https://test-disqus-13.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());

      count.src = 'https://test-disqus-13.disqus.com/count.js';
      count.async = true;
      count.setAttribute('id', 'dsq-count-scr');

      (d.head || d.body).appendChild(s);
      (d.head || d.body).appendChild(count);

      disqusInit.current = true;
    };

    initDisqus();
  }, []);

  return (
    <Box padding="32px">
      <Text fontWeight="bold" align="center">
        Nikmati Mudahnya Jualan Online di Tokopedia
      </Text>
      <Text textAlign="center" marginTop="16px" fontSize="xs">
        Tokopedia merupakan salah satu situs jual beli online di Indonesia yang perkembangannya
        terhitung cepat dan memiliki tujuan untuk memudahkan setiap masyarakat di Indonesia, agar
        dapat melakukan aneka transaksi jual beli secara online. Selain kamu dapat menikmati proses
        pembelian aneka produk lebih mudah dan efisien, kamu para seller juga dapat melakukan jualan
        online di Tokopedia. Kamu bisa bergabung dengan komunitas khusus Tokopedia Seller bagi kamu
        yang ingin memulai bisnis dan jualan online atau ingin memperluas bisnis yang sedang kamu
        jalankan. Proses pendaftaran untuk menjadi Tokopedia Seller juga sangat mudah cukup dengan
        memasukkan data diri, nama toko, alamat toko setelah itu kamu akan langsung terdaftar
        sebagai Tokopedia Seller. Kamu juga dapat melakukan upgrade akun toko kamu menjadi Power
        Merchant untuk menjangkau pelanggan Tokopedia yang lebih luas lagi, sehingga bisnis online
        kamu semakin laris. Keuntungan Power Merchant adalah kamu dapat memberikan fitur Bebas
        Ongkir sehingga dapat menarik lebih banyak lagi pelanggan, lalu kamu dapat menikmati fitur
        TopAds yang dapat menjangkau masyarakat pengguna Tokopedia lebih banyak lagi dengan modal
        yang sangat minim mulai dari Rp 25 ribuan, hingga toko kamu akan tampil lebih menarik lagi
        serta dapat meningkatkan kepercayaan pembeli. Ayo mulai jualan online di Tokopedia dan mulai
        kembangkan usahamu secara online bersama Tokopedia.
      </Text>
      <Box padding="24px" bgColor="blackAlpha.700" marginTop="32px">
        <div id="disqus_thread" />
      </Box>
    </Box>
  );
}

export default Footer;
