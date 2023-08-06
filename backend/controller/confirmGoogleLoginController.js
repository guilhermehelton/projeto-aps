import confirmGoogleLoginService from "../service/confirmGoogleLoginService.js";

const confirmGoogleLoginController = async (req, res) => {
  const userExist = await confirmGoogleLoginService(req.body);

  if (userExist) {
    res.status(200).json({ msg: "Sucesso" });
  } else {
    res.status(422).json({ msg: "Erro ao confirmar login" });
  }
};

export default confirmGoogleLoginController;
