package entity;

public class Candidate {

    private int id;

    private String presidentName;

    private String formulaName;

    private String presidentTitle;

    private String formulaTittle;

    private String presidentPhoto;

    private String formulaPhoto;

    private String partyPhoto;

    private int totalVotes;

    private double porcent;

    public Candidate(int id, String presidentName, String formulaName, String presidentTitle, String formulaTittle, String presidentPhoto, String formulaPhoto, String partyPhoto, int totalVotes) {
        this.id = id;
        this.presidentName = presidentName;
        this.formulaName = formulaName;
        this.presidentTitle = presidentTitle;
        this.formulaTittle = formulaTittle;
        this.presidentPhoto = presidentPhoto;
        this.formulaPhoto = formulaPhoto;
        this.partyPhoto = partyPhoto;
        this.totalVotes = totalVotes;
    }

    public Candidate(int id, String presidentName, String formulaName, String presidentTitle, String formulaTittle, String presidentPhoto, String formulaPhoto, String partyPhoto) {
        this.id = id;
        this.presidentName = presidentName;
        this.formulaName = formulaName;
        this.presidentTitle = presidentTitle;
        this.formulaTittle = formulaTittle;
        this.presidentPhoto = presidentPhoto;
        this.formulaPhoto = formulaPhoto;
        this.partyPhoto = partyPhoto;
    }

    public Candidate() {
    }

    public double getPorcent() {
        return porcent;
    }

    public void setPorcent(double porcent) {
        this.porcent = porcent;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPresidentName() {
        return presidentName;
    }

    public void setPresidentName(String presidentName) {
        this.presidentName = presidentName;
    }

    public String getFormulaName() {
        return formulaName;
    }

    public void setFormulaName(String formulaName) {
        this.formulaName = formulaName;
    }

    public String getPresidentTitle() {
        return presidentTitle;
    }

    public void setPresidentTitle(String presidentTitle) {
        this.presidentTitle = presidentTitle;
    }

    public String getFormulaTittle() {
        return formulaTittle;
    }

    public void setFormulaTittle(String formulaTittle) {
        this.formulaTittle = formulaTittle;
    }

    public String getPresidentPhoto() {
        return presidentPhoto;
    }

    public void setPresidentPhoto(String presidentPhoto) {
        this.presidentPhoto = presidentPhoto;
    }

    public String getFormulaPhoto() {
        return formulaPhoto;
    }

    public void setFormulaPhoto(String formulaPhoto) {
        this.formulaPhoto = formulaPhoto;
    }

    public String getPartyPhoto() {
        return partyPhoto;
    }

    public void setPartyPhoto(String partyPhoto) {
        this.partyPhoto = partyPhoto;
    }

    public int getTotalVotes() {
        return totalVotes;
    }

    public void setTotalVotes(int totalVotes) {
        this.totalVotes = totalVotes;
    }
}
