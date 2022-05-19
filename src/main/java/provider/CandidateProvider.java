package provider;

import db.DbConnection;
import entity.Candidate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CandidateProvider {

    public ArrayList<Candidate> getAllCandidates()throws SQLException, ClassNotFoundException {

        DbConnection conn = new DbConnection();

        ArrayList<Candidate> candidates = new ArrayList<>();


        ResultSet results =  conn.getData("SELECT * FROM parcial2A00369267");

        while(results.next()){

            int id = results.getInt("id");

            String presidentName = results.getString("presidentName");

            String formulaName = results.getString("formulaName");

            String presidentTittle = results.getString("presidentTtitle");

            String formulaTittle = results.getString("formulaTittle");

            String presidentPhoto = results.getString("presidentPhoto");

            String formulaPhoto = results.getString("formulaPhoto");

            String partyPhoto = results.getString("partyPhoto");

            int totalVotes = results.getInt("totalVotes");

            Candidate candidate = new Candidate(id,presidentName,formulaName,presidentTittle,formulaTittle,presidentPhoto,formulaPhoto,partyPhoto,totalVotes);
            candidates.add(candidate);
        }
        System.out.println(candidates.size());
        conn.close();
        return candidates;

    }

    public void updateTotalVotes(int id) throws SQLException, ClassNotFoundException {

        System.out.println(id);

        DbConnection conn = new DbConnection();


        String sql = "SELECT * FROM parcial2A00369267 WHERE id = $ID";
        sql = sql.replace("$ID", ""+id);

        System.out.println(sql);

        Candidate candidate = new Candidate();
        candidate.setId(id);
        ResultSet results =  conn.getData(sql);
        while(results.next()){


            int totalVotes = results.getInt("totalVotes");

            candidate.setTotalVotes(totalVotes);

            //products.add(product);
        }

        System.out.println("Tiene id:" + candidate.getId() +" y votos totales:" + candidate.getTotalVotes());

            sql="UPDATE parcial2A00369267 SET totalVotes = $TOTAL WHERE id = $ID";
            sql= sql.replace("$ID",  ""+id);
            sql = sql.replace("$TOTAL",    Integer.toString(candidate.getTotalVotes()+1));
        System.out.println(sql);

            conn.runQuerry(sql);
            conn.close();



    }




}
