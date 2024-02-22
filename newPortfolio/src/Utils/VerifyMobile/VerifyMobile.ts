// VerifyMobile.ts

class VerifyMobile {
  static isMobile(): boolean {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    // Defina a largura máxima para considerar como um dispositivo móvel (pode ser ajustada conforme necessário)
    const mobileMaxWidth = 768;

    return screenWidth <= mobileMaxWidth;
  }
}

export default VerifyMobile;
