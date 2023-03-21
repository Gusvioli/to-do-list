import CreateTasckEnum from "../utils/enums/CreateTasckEnum";

function createTask() {
  return (
    <>
      <div className="div-0-createTask">
        <div className="div-createTask">
        {/* { !isEmojisTasck ? '' : <EmojisTasck /> } */}
        <form>
          <div className="form-div-date-time-description">
              <div className="form-div-date-time-description-div">
                <button
                  type="button"
                  // onClick={}
                  className="button-prevew-tasck"
                >
                 {/* {
                    logoEmoji !== ''
                    ? <div>
                        <img
                            src={emojis?.filter((emoji: any) => emoji.name === logoEmoji)
                              ?.map((emoji: any) => emoji)[0].url}
                            alt={logoEmoji}
                            width="30px"
                            height="30px"
                          />
                          <img
                            src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png?v8"
                            alt="Checked"
                            width="15px"
                            height="15px"
                            className="img-checked"
                          />
                    </div>
                    : <img
                        src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f642.png"
                        alt="slightly_smiling_face"
                        width="30px"
                        height="30px"
                      />
                 } */}
                </button>
                <label htmlFor="subtitle">
                  <input
                    className="label-input-date"
                    type="date"
                    name="date"
                    id="date"
                    // disabled={edtorTrue?.id > 0}
                    // onChange={(e) => hendleForm(e)}
                  />
                </label>
                <label htmlFor="horaMinutes">
                  <input
                    className="label-input-time"
                    type="time"
                    name="horaMinutes"
                    id="horaMinutes"
                    placeholder="00:00"
                    // onChange={(e) => hendleForm(e)}
                  />
                </label>
                <button
                  className="div-1-criacao-edicao-button"
                  type="button"
                >
              </button>
              </div>
              <div
                className="div-1-criacao-edicao-button-div-clear"
              >
                {/* {caracters}/200 */}
                <button
                    type="button"
                    className="div-1-criacao-edicao-button-clear"
                    // onClick={hendleClearDescription}
                >
                  Clear
                </button>
              </div>
              <label htmlFor="descript">
                <textarea
                  name="descript"
                  id="descript"
                  cols={55}
                  rows={5}
                  wrap="true"
                  // value={descript}
                  minLength={CreateTasckEnum.MIN}
                  maxLength={CreateTasckEnum.MAX}
                  placeholder={'Descript tasck'}
                  // onChange={(e) => hendleForm(e)}
                />
              </label>
            </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default createTask;