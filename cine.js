/**
   * Função para exibir o modal de pedido com os dados do produto.
   * Usa o mesmo código existente, sem alterar a estrutura HTML.
   *
   * Os dados dos produtos estão embutidos no código.
   *
   * @param {string} id - ID do produto.
   * @param {string} serviceName - Nome do serviço/produto.
   */
function popupOrder(id, serviceName) {
  // Objeto contendo os dados de todos os produtos do site
  var productDetails = {

    "4daa3db355ef2b0e64b472968cb70f0d": {
      image: "imagem/-96x96-.png",
      description: "Descrição detalhada ",
      price: "R$0",
      delivery: "24h"
    },
    "b7892fb3c2f009c65f686f6355c895b5": {
      image: "imagem/favico.png",
      description: "Descrição detalhada ",
      price: "R$0",
      delivery: "48h"
    },
    "af3303f852abeccd793068486a391626": {
      image: "imagem/favicon.png",
      description: "Descrição detalhada ",
      price: "R$0",
      delivery: "36h"
    },
    "958adb57686c2fdec5796398de5f317a": {
      image: "imagem/",
      description: "Descrição detalhada ",
      price: "R$0",
      delivery: "72h"
    },
    "90794e3b050f815354e3e29e977a88ab": {
      image: "caminho/para/imagem5.jpg",
      description: "Descrição detalhada .",
      price: "R$0",
      delivery: "12h"
    },
    "e820a45f1dfc7b95282d10b6087e11c0": {
      image: "caminho/para/imagem6.jpg",
      description: "Descrição detalhada .",
      price: "R$ 0",
      delivery: "18h"
    },



    "id_405e28906322882c5be9b4b27f4c35fd": {
      image: "imagem./max.png",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens MAX PREMIUM 30D </br> 🎬 Filmes e séries exclusivas da Warner, HBO e muito mais. </br> 📺 Qualidade Full HD e 4K para uma experiência imersiva </br> 📱 Assista em celulares, Smart TVs, PC e consoles </br> 🔄 Modo offline para baixar e assistir sem internet </br>🎯 Faça o seu pedido!</span>",
      price: "R$ 11,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min a 3 horas"
    },
    "id_4b6538a44a1dfdc2b83477cd76dee98e": {
      image: "imagem./net.png",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias</br>🏅 Vantagens Netflix Premium 4K ⤵️ </br> 🎥 Acesso a filmes, séries e documentários exclusivos </br> 📺 Qualidade Ultra HD 4K e HDR para máxima experiência </br> 👥 Perfis personalizados para cada usuário </br>📱 Assista em celular, Smart TV, PC e consoles </br>🎯 Faça o seu pedido! </span>",
      price: "R$ 22,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min"
    },
    "id_2ba596643cbbbc20318224181fa46b28": {
      image: "imagem/96x96.png",
      description: "<span style='font-size: 0.8em;'> </br>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Disney+ Premium ⤵️</br> 🎥 Acesso a filmes e séries da Disney, Pixar, Marvel e Star Wars</br>📺 Streaming em qualidade 4K UHD e HDR</br>👨‍👩‍👧‍👦 Perfis personalizados para toda a família</br>📱 Assista em celulares, Smart TVs, consoles e mais.</br> 🎯 Faça o seu pedido!</span>",
      price: "R$ 17,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min"
    },
    "id_c8c41c4a18675a74e01c8a20e8a0f662": {
      image: "imagem/cheet.jpeg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Globoplay + Canais ⤵️</br>📺 Acesso a novelas, séries e programas exclusivos da Globo</br>🎬 Canais ao vivo com jornalismo, esportes e entretenimento</br>📡 Conteúdos on-demand para assistir quando quiser</br>📱 Disponível para celular, Smart TV, PC e tablets</br>🔄 Modo offline para baixar e assistir sem internet.</br> 🎯 Faça o seu pedido!</span>",
      price: "R$ 15,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min"
    },
    "id_c4b31ce7d95c75ca70d50c19aef08bf1": {
      image: "imagem/df.png",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Prime Video ⤵️</br>🎬 Acesso a um vasto catálogo de filmes e séries exclusivas</br>📡 Produções originais da Amazon, incluindo The Boys e Reacher</br>📺 Qualidade Full HD e 4K para uma experiência superior</br>📱 Disponível para celular, Smart TV, PC e tablets</br>🔄 Modo offline para baixar e assistir sem internet</br>🎯 Faça o seu pedido!</span>",
      price: "R$ 15,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min"
    },
    "id_58e4d44e550d0f7ee0a23d6b02d9b0db": {
      image: "imagem/kg ki.png",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens DUNA TV ⤵️</br>🌌 Acesso a uma ampla variedade de canais ao vivo</br>🎥 Filmes, séries e conteúdos exclusivos na palma da mão</br>📱 Compatível com Smart TVs, celulares e tablets</br>⚙️ Navegação intuitiva e suporte técnico especializado</br>🎯 Faça o seu pedido!</span>",
      price: "R$ 29,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min"
    },
    "id_3cef96dcc9b8035d23f69e30bb19218a": {
      image: "imagem/mdm1.png",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Paramount+ Premium ⤵️</br>🎬 Filmes e séries exclusivas da Paramount, Nickelodeon e mais</br>📺 Streaming em Full HD e 4K para máxima qualidade</br>📱 Disponível para celular, Smart TVs, PC e consoles</br>🔄 Modo offline para baixar e assistir sem internet</br>🎯 Faça o seu pedido! </span>",
      price: "R$ R$ 10,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min"
    },
    "id_a3d68b461bd9d3533ee1dd3ce4628ed4": {
      image: "imagem/mst.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Crunchyroll Premium ⤵️ </br>🎥 Acesso ilimitado a animes exclusivos e simulcasts</br>⚡ Episódios novos logo após a exibição no Japão</br>🎮 Modo offline para assistir sem internet</br>📱 Disponível para celular, Smart TV, PC e consoles</br>🎯 Faça o seu pedido!</span>",
      price: "R$ 12,90",
      delivery: "⚡ Tempo Médio de Entrega: </br> 5 min"
    },
    "id_ef4e3b775c934dada217712d76f3d51f": {
      image: "imagem/rtc1.png",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens YouTube Família Premium ⤵️</br>🎬 Assista a vídeos sem anúncios em toda a plataforma</br>📥 Modo offline para baixar e assistir sem internet</br>🔄 Reprodução em segundo plano para multitarefas</br>👨‍👩‍👧‍👦 Compartilhe com até 5 membros da família</br>🎯 Faça o seu pedido!</span>",
      price: "R$ 15,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_6395ebd0f4b478145ecfbaf939454fa4": {
      image: "imagem/tsm2.jpeg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Claro TV+ Canais ⤵️</br>📡 Canais ao vivo com programação variada</br>🎬 Filmes, séries, esportes e conteúdos infantis</br>📱 Disponível para celular, Smart TV, PC e tablets</br>🔄 Assista onde e quando quiser, com replay de programação</br>🎯 Faça o seu pedido!</span>",
      price: "R$ 14,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_9232fe81225bcaef853ae32870a2b0fe": {
      image: "imagem/uat-pro.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens UFC Pass Premium ⤵️</br>🥊 Acesso exclusivo a eventos do UFC ao vivo</br>📺 Assista a lutas históricas e conteúdos on-demand</br>🎥 Cobertura completa, entrevistas e documentários</br>📱 Disponível para celular, Smart TV, PC e consoles</br>🎯 Faça o seu pedido!</span>",
      price: "R$ 18,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9e0": {
      image: "imagem/un.png",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens NBA League Pass ⤵️</br>🏀 Assista a todos os jogos da temporada ao vivo e on-demand</br>📺 Transmissões em qualidade Full HD e 4K</br>📱 Compatível com celular, Smart TV, PC e consoles</br>🔄 Replay e estatísticas em tempo real para cada jogo</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 26,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9e2": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens DAZN Premium ⤵️</br>⚽ Transmissão ao vivo de campeonatos nacionais e internacionais</br>📺 Qualidade Full HD e 4K para uma experiência imersiva</br>📱 Assista no celular, Smart TV, PC e consoles</br>🔄 Replay e melhores momentos disponíveis on-demand</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 17,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9eh": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Fla TV Premium ⤵️</br>⚽ Acompanhe conteúdos exclusivos do Flamengo</br>📺 Transmissões ao vivo, bastidores e entrevistas exclusivas</br>📱 Acesso no celular, Smart TV, PC e consoles</br>🎥 Replay e melhores momentos on-demand</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 19,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9ek": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Looke Premium ⤵️</br>🎬 Acesso a milhares de filmes e séries nacionais e internacionais</br>📺 Qualidade HD e 4K para uma experiência cinematográfica</br>📱 Disponível para celular, Smart TV, PC e consoles</br>🔄 Modo offline para assistir sem internet</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 16,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9e": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 30 dias </br>🏅 Vantagens Vivo Play ⤵️</br>📺 Acesso a filmes, séries e conteúdos sob demanda</br>📡 Canais ao vivo de entretenimento, esportes e notícias</br>🎬 Opção de aluguel de lançamentos exclusivos</br>📱 Disponível para celular, Smart TV, PC e tablets</br>🔄 Modo offline para assistir quando quiser</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 21,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },



    "id_1c1d4df596d01da60385f0bb17a4a9el": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias </br>🏅 Vantagens Crunchyroll Premium ⤵️</br>🎌 Acesse animes exclusivos e lançamentos simultâneos com o Japão</br>📡 Episódios sem anúncios e em alta qualidade</br>📺 Opção de legendas e dublagens em diversos idiomas</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 28,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9ed": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias </br>🏅 Vantagens Paramount+ Premium ⤵️</br>🎬 Acesse séries e filmes exclusivos da Paramount+</br>📡 Produções originais e lançamentos da plataforma</br>📺 Qualidade HD e 4K para máxima experiência de visualização</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 22,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9em": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias </br>🏅 Vantagens Netflix Premium 4K ⤵️</br>🎬 Acesso ao catálogo completo de filmes, séries e documentários exclusivos</br>📡 Qualidade Ultra HD 4K para máxima experiência de visualização</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 56,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9ez": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias </br>🏅 Vantagens Claro TV + Canais Premium ⤵️</br>📡 Acesso a uma variedade de canais ao vivo de entretenimento, esportes e notícias</br>🎬 Filmes, séries e conteúdos exclusivos para toda a família</br>📺 Qualidade HD para máxima experiência de visualização</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 32,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9et": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias </br>🏅 Vantagens UFC Pass Premium ⤵️</br>🥊 Transmissão ao vivo de eventos exclusivos do UFC</br>📡 Acesso a lutas históricas e programação original</br>📺 Qualidade HD e 4K para máxima experiência de visualização</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 40,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a9ey": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias </br>🏅 Vantagens NBA League Pass Premium ⤵️</br>🏀 Acompanhe todos os jogos da NBA ao vivo e on-demand</br>📡 Acesso a replays, estatísticas e análises exclusivas</br>📺 Qualidade HD e 4K para máxima experiência esportiva</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 80,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a950": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias</br>🏅 Vantagens Viki Rakuten Premium ⤵️</br>🎌 Acesso a dramas asiáticos, filmes e variedades exclusivos</br>📡 Conteúdos legendados em diversos idiomas</br>📺 Qualidade HD para uma experiência superior</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 30,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a951": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias</br>🏅 Vantagens DAZN Premium ⤵️</br>⚽ Transmissão ao vivo de campeonatos nacionais e internacionais</br>📺 Qualidade Full HD e 4K para uma experiência imersiva</br>📱 Assista no celular, Smart TV, PC e consoles</br>🔄 Replay e melhores momentos disponíveis on-demand</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 46,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a952": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias</br>🏅 Vantagens Fla TV Premium ⤵️</br>⚽ Acompanhe conteúdos exclusivos do Flamengo</br>📺 Transmissões ao vivo, bastidores e entrevistas exclusivas</br>📱 Acesso no celular, Smart TV, PC e consoles</br>🎥 Replay e melhores momentos on-demand</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 54,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a953": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias</br>🏅 Vantagens Looke Premium ⤵️</br>🎬 Acesso a milhares de filmes e séries nacionais e internacionais</br>📺 Qualidade HD e 4K para uma experiência cinematográfica</br>📱 Disponível para celular, Smart TV, PC e consoles</br>🔄 Modo offline para assistir sem internet</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 32,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "id_1c1d4df596d01da60385f0bb17a4a954": {
      image: "imagem/",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 90 dias</br>🏅 Vantagens Vivo Play ⤵️</br>📺 Acesso a filmes, séries e conteúdos sob demanda</br>📡 Canais ao vivo de entretenimento, esportes e notícias</br>🎬 Opção de aluguel de lançamentos exclusivos</br>📱 Disponível para celular, Smart TV, PC e tablets</br>🔄 Modo offline para assistir quando quiser</br>🎯 Faça o seu pedido!</span>.",
      price: "R$ 44,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },



    "798cebccb32617ad94123450fd137104": {
      image: "caminho/para/imagem12.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Crunchyroll Premium ⤵️</br>🎥 Acesso ilimitado a animes populares e exclusivos</br>📡 Episódios lançados poucas horas após a estreia no Japão</br>📺 Modo offline para assistir sem internet</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 80,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    // Adicionando novos produtos aqui
    "168908dd3227b8358eababa07fcaf091": {
      image: "caminho/para/imagem13.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Paramount+ Premium ⤵️</br>🎬 Acesse séries e filmes exclusivos da Paramount+</br>📡 Produções originais e lançamentos da plataforma</br>📺 Qualidade HD e 4K para máxima experiência de visualização</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 32,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "11f524c3fbfeeca4aa916edcb6b6392e": {
      image: "caminho/para/imagem14.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Netflix Premium 4K ⤵️</br>🎬 Acesso ao catálogo completo de séries, filmes e documentários</br>📡 Streaming em qualidade Ultra HD 4K</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 129,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "d4b2aeb2453bdadaa45cbe9882ffefcf": {
      image: "caminho/para/imagem15.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Prime Video Premium ⤵️</br>🎬 Acesso ao catálogo completo do Prime Video com séries e filmes exclusivos</br>📡 Conteúdos originais e lançamentos frequentes</br>📺 Qualidade HD e 4K para uma experiência superior</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 70,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "d2ed45a52bc0edfa11c2064e9edee8bf": {
      image: "caminho/para/imagem16.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Globoplay + Canais Premium ⤵️</br>📡 Acesso ao catálogo completo do Globoplay e canais ao vivo</br>🎬 Séries, filmes, novelas e jornalismo da Globo</br>📺 Qualidade HD para uma experiência superior</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 60,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c92d0f3a2": {
      image: "caminho/para/imagem17.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Claro TV + Canais Premium ⤵️</br>📡 Acesso a uma ampla variedade de canais ao vivo e sob demanda</br>🎬 Filmes, séries, esportes e programação infantil inclusos</br>📺 Qualidade HD e compatível com múltiplos dispositivos</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 60,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c92d0f3a": {
      image: "caminho/para/imagem17.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Viki Rakuten Premium ⤵️</br>🎥 Acesso a doramas, filmes e séries asiáticas exclusivas</br>📡 Conteúdo legendado em vários idiomas</br>📺 Modo offline para assistir sem internet</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 70,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c92d0f3": {
      image: "caminho/para/imagem17.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens UFC Pass Premium ⤵️</br>🥊 Acesso completo a lutas ao vivo e eventos exclusivos do UFC</br>📡 Conteúdos sob demanda, replays e bastidores das lutas</br>📺 Qualidade HD e 4K para a melhor experiência esportiva</br>📺 Qualidade HD e 4K para a melhor experiência esportiva</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que nviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 100,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c92d0f": {
      image: "caminho/para/imagem17.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens NBA League Pass Premium ⤵️</br>🏀 Assista a todos os jogos da NBA ao vivo e sob demanda</br>📡 Cobertura completa, replays e análise dos jogos</br>📺 Qualidade HD e 4K para máxima experiência esportiva</br>📱 Disponível para celular, Smart TV, PC e tablets</br>Obs: Em caso de falha na renovação ou qualquer problema que inviabilize o suporte à conta, um novo acesso será disponibilizado sem custo adicional.</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 150,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c92d0": {
      image: "caminho/para/imagem17.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Anime Fire Premium ⤵️</br>🎥 Acesso ilimitado a animes legendados e dublados</br>🔥 Novos episódios lançados rapidamente</br>📺 Qualidade HD e 4K para máxima imersão</br>📱 Disponível para celular, Smart TV, PC e consoles</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 49,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c92d": {
      image: "caminho/para/imagem17.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens DAZN Premium ⤵️</br>⚽ Transmissão ao vivo de campeonatos nacionais e internacionais</br>📺 Qualidade Full HD e 4K para uma experiência imersiva</br>📱 Assista no celular, Smart TV, PC e consoles</br>🔄 Replay e melhores momentos disponíveis on-demand</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 79,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c92": {
      image: "caminho/para/imagem17.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Fla TV Premium ⤵️</br>⚽ Acompanhe conteúdos exclusivos do Flamengo</br>📺 Transmissões ao vivo, bastidores e entrevistas exclusivas</br>📱 Acesso no celular, Smart TV, PC e consoles</br>🎥 Replay e melhores momentos on-demand</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 109,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c9": {
      image: "caminho/para/imagem1.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Looke Premium ⤵️</br>🎬 Acesso a milhares de filmes e séries nacionais e internacionais</br>📺 Qualidade HD e 4K para uma experiência cinematográfica</br>📱 Disponível para celular, Smart TV, PC e consoles</br>🔄 Modo offline para assistir sem internet</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 69,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    },
    "043c3d7e489c69b48737cc0c": {
      image: "caminho/para/imagem.jpg",
      description: "<span style='font-size: 0.8em;'>✅ Planos com garantia de 180 dias</br>🏅 Vantagens Vivo Play ⤵️</br>📺 Acesso a filmes, séries e conteúdos sob demanda</br>📡 Canais ao vivo de entretenimento, esportes e notícias</br>🎬 Opção de aluguel de lançamentos exclusivos</br>📱 Disponível para celular, Smart TV, PC e tablets</br>🔄 Modo offline para assistir quando quiser</br>🎯 Faça o seu pedido! </span>",
      price: "R$ 79,90",
      delivery: "⚡ Tempo Médio de Entrega:</br> 5 min"
    }

  };

  // Obtém os detalhes do produto com base no id 
  var details = productDetails[id] || {
    image: "",
    description: "Sem descrição disponível.",
    price: "N/A",
    delivery: "N/A"
  };

  // Atualiza os campos ocultos e o título do modal
  $('.servicename').text(serviceName);
  $('#service-id').val(id);
  $('#service-name').val(serviceName);

  // Cria a mensagem para o WhatsApp
  var textMessage =
    `Olá, gostaria de fazer um pedido do *${serviceName}* pelo valor de *${details.price}*.\n` +
    `📌 *Pagamento via PIX*: jshrq78@gmail.com\n`;

  // Ajuste o número abaixo para seu WhatsApp (ex: 5521999998888)
  var orderLink = "https://api.whatsapp.com/send?phone=5581973202326&text="
    + encodeURIComponent(textMessage);

  // Cria o layout de duas colunas com uma linha divisória:
  // - Esquerda: preço, entrega e botão “Fazer Pedido” que abre o WhatsApp
  // - Direita: imagem do produto e descrição
  var modalContent = `
        <div class="row">
            <div class="col-md-6">
                <p class="badge badge-success" style="font-size:1.2em;">${details.price}</p>
                <p style="font-size:0.9em; margin:0;">${details.delivery}</p>
                <a id="order-button"
                   href="${orderLink}"
                   target="_blank"
                   class="btn btn-primary btn-block mt-3">
                    Fazer Pedido
                </a>
            </div>
            <div class="col-md-6 text-center" style="border-left: 1px solid #ccc;">
                <br>
               
                <p>${details.description}</p>
            </div>
        </div>
    `;

  $('#serviceDetails2').html(modalContent);
  $('#modal-order').show();

  // Torna o body do modal rolável e limita a altura máxima
  $('#modal-order .modal-body').css({
    'max-height': '80vh',
    'overflow-y': 'auto'
  }).scrollTop(0);
}




function showNavCategoriesLevel1() {
  $('.nav-categories-level-2').fadeOut('fast').promise().done(function () {
    $('.nav-categories-level-1').fadeIn('fast');
  });
}
function showNavCategoriesLevel2(id) {
  $('.nav-categories-level-1').fadeOut('fast').promise().done(function () {
    $('.nav-categories-level-2.nav-category-children-' + id).fadeIn();
  });
}
$(document).ready(function () {
  $('.nav-categories-go-level-1').click(function (e) {
    showNavCategoriesLevel1();
    e.preventDefault();
  });
  $('.nav-categories-go-level-2').click(function (e) {
    var categoryId = $(this).data('id');
    showNavCategoriesLevel2(categoryId);
    e.preventDefault();
  });
})

$(document).ready(function () {
  $(".spinner-input-sm").inputSpinner({ groupClass: "input-group-sm" })
});




$(document).ready(function () {
  $('.show-quote-form').click(function () {
    $('.form-quote-area, .qtd-hidden').show();
    $('.sidebar-cart .form-edit, .sidebar-cart .delete-column').hide();
    $(this).hide();
  })
});

$(document).ready(function () {
  $('.filter-category').click(function (event) {
    event.preventDefault();
    $(this).parents('ul').find('.value').val($(this).attr('id'));
    $(this).parents('.form-filtros').prop('action', $(this).data('action'));
    $(this).parents('.form-filtros').submit();
  })
  $('.filter-checkbox').change(function (event) {
    $(this).parents('.form-filtros').submit();
  })
  $('.filter-order').change(function (event) {
    $('.form-filtros').first().find('.order').val($(this).val());
    $('.form-filtros').first().submit();
  })
})

$(function () {
  'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  });
});
function openSidebar(section) {
  $('.offcanvas-collapse').removeClass('open');
  $('.sidebar .sidebar-section').hide();
  $('.sidebar .sidebar-' + section).show();
  $('.offcanvas-collapse').addClass('open');
  $('.offcanvas-bg-overlay').hide().fadeIn('slow');
  $('html, body').addClass('overflow-hidden');
}
$(document).ready(function () {
  $('.open-sidebar').click(function () {
    $('.offcanvas-collapse').removeClass('left');
    if ($(this).data('from') == 'left') {
      $('.offcanvas-collapse').addClass('left');
    }
    openSidebar($(this).data('section'));
    return false;
  });
  $('.close-sidebar').click(function () {
    $('.offcanvas-collapse').removeClass('open');
    $('.offcanvas-bg-overlay').fadeOut('slow');
    $('html, body').removeClass('overflow-hidden');
    return false;
  });
});

$(document).ready(function () {
  $('.filter-category').click(function (event) {
    event.preventDefault();
    $(this).parents('ul').find('.value').val($(this).attr('id'));
    $(this).parents('.form-filtros').prop('action', $(this).data('action'));
    $(this).parents('.form-filtros').submit();
  })
  $('.filter-checkbox').change(function (event) {
    $(this).parents('.form-filtros').submit();
  })
  $('.filter-order').change(function (event) {
    $('.form-filtros').first().find('.order').val($(this).val());
    $('.form-filtros').first().submit();
  })
})

function setProductsColumns(columns) {
  setCookie("productsColumns", columns, 190);
  $('.product-list-item').removeClass('col-12 col-6 col-md-3 col-md-4').addClass(columns);
  let columnsSlug = columns.replace(/ /g, "-");
  $('.set-products-columns .square-container .square').removeClass('filled');
  $('.set-products-columns' + '.' + columnsSlug + ' .square-container .square').addClass('filled');
}
$(document).ready(function () {
  var productsColumns = getCookie("productsColumns");
  if (productsColumns) {
    setProductsColumns(productsColumns);
  } else {
    setProductsColumns('col-6 col-md-4');
  }
  $('.set-products-columns').click(function (e) {
    var columns = $(this).data('columns');
    setProductsColumns(columns);
    e.preventDefault();
  });
})
document.addEventListener("DOMContentLoaded", function () {
  const filterBar = document.getElementById("filterBar");
  const body = document.body;
  let filterBarOffset = filterBar.getBoundingClientRect().top + window.pageYOffset + 10;
  function toggleSticky() {
    if (window.innerWidth <= 767) {
      if (window.pageYOffset > filterBarOffset) {
        filterBar.classList.add("fixed");
        body.classList.add("filters-fixed");
      } else {
        filterBar.classList.remove("fixed");
        body.classList.remove("filters-fixed");
      }
    }
  }
  window.addEventListener("scroll", toggleSticky);
  window.addEventListener("resize", function () {
    const filterBar = document.getElementById("filterBar");
    const body = document.body;
    let filterBarOffset = filterBar.getBoundingClientRect().top + window.pageYOffset + 10;
    toggleSticky();
  });
});


$(document).ready(function () {
  $("#searchservicebox2").on("keyup", function () {
    var value = $(this).val().toLowerCase();

    // Filtra os produtos individuais
    $(".service").each(function () {
      var productName = $(this).find(".searchme").text().toLowerCase();
      $(this).toggle(productName.indexOf(value) !== -1);
    });

    // Para cada grupo de produtos, verifica se há algum produto visível
    $(".row.group").each(function () {
      if ($(this).find(".service:visible").length === 0) {
        // Se nenhum produto deste grupo estiver visível, oculta o título
        $(this).find(".title").hide();
      } else {
        // Caso contrário, exibe o título
        $(this).find(".title").show();
      }
    });
  });
});

$(document).ready(function () {
  var shortcuts = $('.shortcuts').clone();
  $('.shortcuts-mobile-area').html(shortcuts);
  $('.shortcuts-mobile-area .shortcuts').addClass('d-block d-sm-none');
});

$(document).ready(function () {
  $('.banners-topo-carousel').owlCarousel({
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoHeight: true,
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    slideBy: 1,
    items: 1
  });
});

$(document).ready(function () {
  $('.menu-principal .dropdown > a').click(function () {
    if ($(window).width() > 768) {
      location.href = this.href;
    }
  });
});