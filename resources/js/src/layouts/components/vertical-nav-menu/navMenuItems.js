/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
let myPermits = [];

if (typeof localStorage.getItem("permitKey") === "undefined") {
  myPermits = [];
} else {
  let permits = JSON.parse(localStorage.getItem("permitKey"));

  myPermits.push({
    url: "/",
    name: "Inicio",
    slug: "inicio",
    icon: "HomeIcon"
  });

  if (permits.filter(x => x.idParent === "1" && x.status === 1).length > 0)
    myPermits.push({
      url: "/clientes",
      name: "Clientes",
      slug: "clientes",
      icon: "UserIcon"
    });
  if (permits.filter(x => x.idParent === "8" && x.status === 1).length > 0)
    myPermits.push({
      url: "/solicitudes",
      name: "Solicitudes",
      slug: "solicitudes",
      icon: "ListIcon"
    });
  if (permits.filter(x => x.idParent === "15" && x.status === 1).length > 0)
    myPermits.push({
      url: "/creditos",
      name: "Créditos",
      slug: "creditos",
      icon: "GridIcon"
    });
  if (permits.filter(x => x.idParent === "25" && x.status === 1).length > 0)
    myPermits.push({
      url: "/cuentas",
      name: "Cuentas",
      slug: "ceuntas",
      icon: "LayersIcon"
    });
  if (permits.filter(x => x.idParent === "30" && x.status === 1).length > 0)
    myPermits.push({
      url: "/cajas",
      name: "Cajas",
      slug: "cajas",
      icon: "InboxIcon"
    });
  if (permits.filter(x => x.idParent === "36" && x.status === 1).length > 0)
    myPermits.push({
      url: "/transacciones",
      name: "Transacciones",
      slug: "transacciones",
      icon: "RepeatIcon"
    });
  if (permits.filter(x => x.idParent === "40" && x.status === 1).length > 0)
    myPermits.push({
      url: "/cobrar",
      name: "Cobrar",
      slug: "cobrar",
      icon: "DollarSignIcon"
    });
  if (permits.filter(x => x.idParent === "43" && x.status === 1).length > 0)
    myPermits.push({
      url: "/usuarios",
      name: "Usuarios",
      slug: "usuarios",
      icon: "UserIcon"
    });
  if (permits.filter((x => x.idParent === "43" && x.status === 1) || (x => x.idParent === "48" && x.status === 1)).length > 0)
    myPermits.push({
      url: "/permisos",
      name: "Permisos",
      slug: "permisos",
      icon: "ListIcon"
    });
  if (permits.filter(x => x.idParent === "56" && x.status === 1).length > 0)
    myPermits.push({
      url: "/reportes",
      name: "Reportes",
      slug: "cobrar",
      icon: "FileTextIcon"
    });
}
export default myPermits;
